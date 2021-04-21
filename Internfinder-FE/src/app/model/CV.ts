export class CV {
  private _name: string;
  private _date: string;
  private _status: string;


  constructor(name: string, date: string, status: string) {
    this._name = name;
    this._date = date;
    this._status = status;
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }
}
