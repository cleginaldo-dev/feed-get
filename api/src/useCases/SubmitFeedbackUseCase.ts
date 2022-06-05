import { IMailProvider } from "../providers/IMailProvider";
import { IFeedbacksRepository } from "../repositories/IFeedbacksRepository";

interface IRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: IFeedbacksRepository,
    private mailProvider: IMailProvider
  ) {}
  async execute({ type, comment, screenshot }: IRequest): Promise<void> {
    if (!type) {
      throw new Error("Type is required.");
    }

    if (!comment) {
      throw new Error("Comment is required.");
    }

    if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new Error("Invalid screenshot format");
    }

    await this.feedbacksRepository.create({ type, comment, screenshot });

    await this.mailProvider.sendMail({
      subject: "Novo feedback",
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        `<p>Tipo do feedback: ${type}<p/>`,
        `<p>Comentário: ${comment}<p/>`,
        screenshot ? `<img src="${screenshot}" />` : ``,
        `</div>`,
      ].join("\n"),
    });
  }
}
