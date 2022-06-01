export interface ICreateFeedbackDTO {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface IFeedbacksRepository {
  create(data: ICreateFeedbackDTO): Promise<void>;
}
