import {Replace} from 'src/helpers/replace';

interface UserProps {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
}

export class User {
  private _id: number;
  private props: Replace<UserProps, {createdAt?: Date; updatedAt?: Date}>;

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

  get updatedAt() {
    return this.props.updatedAt;
  }

  get deletedAt() {
    return this.props.deletedAt;
  }

  constructor(
    props: Replace<UserProps, {createdAt?: Date; updatedAt?: Date}>,
    id?: number,
  ) {
    this._id = id;
    this.props = props;
  }
}
