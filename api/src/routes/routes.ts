import { Router } from "express";

import { NodeMailProvider } from "../providers/nodemailer/NodeMailProvider";
import { FeedbacksRepository } from "../repositories/prisma/FeedbacksRepository";
import { SubmitFeedbackUseCase } from "../useCases/SubmitFeedbackUseCase";

const router = Router();

router.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;
  console.log(screenshot);
  const prismaFeedbacksRepository = new FeedbacksRepository();
  const nodeMailerProvider = new NodeMailProvider();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodeMailerProvider
  );

  const feedback = await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).json({ data: feedback });
});

export { router };
