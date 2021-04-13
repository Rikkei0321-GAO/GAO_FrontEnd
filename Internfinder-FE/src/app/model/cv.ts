export class Cv {
  private _id: number;
  private _name: string;
  private _acceptdate: string;
  private _decriptions: string;
  private _email: string;
  private _image: string;
  private _phone: string;


  constructor(id: number, name: string, acceptdate: string, decriptions: string, email: string, image: string, phone: string) {
    this._id = id;
    this._name = name;
    this._acceptdate = acceptdate;
    this._decriptions = decriptions;
    this._email = email;
    this._image = image;
    this._phone = phone;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get acceptdate(): string {
    return this._acceptdate;
  }

  set acceptdate(value: string) {
    this._acceptdate = value;
  }

  get decriptions(): string {
    return this._decriptions;
  }

  set decriptions(value: string) {
    this._decriptions = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }
}
