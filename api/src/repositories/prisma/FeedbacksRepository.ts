import { prisma } from "../../prisma";
import {
  ICreateFeedbackDTO,
  IFeedbacksRepository,
} from "../IFeedbacksRepository";

export class FeedbacksRepository implements IFeedbacksRepository {
  async create({
    type,
    comment,
    screenshot,
  }: ICreateFeedbackDTO): Promise<void> {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
