import nodemailer from "nodemailer";

import { IMailProvider, ISendMailDTO } from "../IMailProvider";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "699fa11f8861e8",
    pass: "8282f9c9bcfa11",
  },
});

export class NodeMailProvider implements IMailProvider {
  async sendMail({ subject, body }: ISendMailDTO): Promise<void> {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Cleginaldo Bandeiras <bandeiracker@gmail.com>",
      subject,
      html: body,
    });
  }
}
