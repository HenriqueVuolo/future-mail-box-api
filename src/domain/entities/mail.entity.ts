import {randomUUID} from 'node:crypto';
import {Replace} from 'src/helpers/replace';

interface MailProps {
  subject: string;
  content: string;
  status: MailStatus;
  userId: string;
  to: string;
  sendAt: Date;
  createdAt: Date;
}

export type MailStatus = 'PENDING' | 'SENT' | 'CANCELED';
export class Mail {
  private _id: string;
  private props: Replace<MailProps, {createdAt?: Date; status?: MailStatus}>;

  get id() {
    return this._id;
  }

  get subject() {
    return this.props.subject;
  }

  get content() {
    return this.props.content;
  }

  get status() {
    return this.props.status;
  }

  get userId() {
    return this.props.userId;
  }

  get to() {
    return this.props.to;
  }

  get sendAt() {
    return this.props.sendAt;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  public send() {
    this.props.status = 'SENT';
  }

  public cancel() {
    this.props.status = 'CANCELED';
  }

  constructor(
    props: Replace<MailProps, {createdAt?: Date; status?: MailStatus}>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = props;
  }
}
