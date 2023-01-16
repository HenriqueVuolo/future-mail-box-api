import {randomUUID} from 'node:crypto';
import {Replace} from 'src/helpers/replace';

interface UserProps {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  createdAt: Date;
}

export class User {
  private _id: string;
  private props: Replace<UserProps, {createdAt?: Date}>;

  get id() {
    return this._id;
  }

  get firstname() {
    return this.props.firstname;
  }

  get lastname() {
    return this.props.lastname;
  }

  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  public hidePassword() {
    this.props.password = undefined;
  }

  public updateEmail(email: string) {
    this.props.email = email;
  }

  constructor(props: Replace<UserProps, {createdAt?: Date}>, id?: string) {
    this._id = id ?? randomUUID();
    this.props = props;
  }
}
