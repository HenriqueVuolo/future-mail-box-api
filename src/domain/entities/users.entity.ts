import {Replace} from 'src/helpers/replace';

interface UserProps {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
}

export class User {
  private _id: number;
  private props: Replace<UserProps, {createdAt?: Date}>;

  get id() {
    return this._id;
  }

  get firstName() {
    return this.props.firstName;
  }

  get lastName() {
    return this.props.lastName;
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

  constructor(props: Replace<UserProps, {createdAt?: Date}>, id?: number) {
    this._id = id;
    this.props = props;
  }
}
