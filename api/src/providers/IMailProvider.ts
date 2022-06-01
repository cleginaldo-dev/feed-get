export interface ISendMailDTO {
  subject: string;
  body: string;
}

export interface IMailProvider {
  sendMail(data: ISendMailDTO): Promise<void>;
}
