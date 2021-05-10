export class CvCreated {
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get dayOfBirth(): string {
    return this._dayOfBirth;
  }

  set dayOfBirth(value: string) {
    this._dayOfBirth = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

  get objective(): string {
    return this._objective;
  }

  set objective(value: string) {
    this._objective = value;
  }

  get avatar(): string {
    return this._avatar;
  }

  set avatar(value: string) {
    this._avatar = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

// @ts-ignore
  private _id: number;
  // @ts-ignore
  private _firstName: string;
  // @ts-ignore
  private _lastName: string;
  // @ts-ignore
  private _dayOfBirth: string;
  // @ts-ignore
  private _phone: string;
  // @ts-ignore
  private _email: string;
  // @ts-ignore
  private _gender: string;
  // @ts-ignore
  private _objective: string;

  // @ts-ignore
  private _avatar: string;
  // @ts-ignore
  private _address: string;
}
