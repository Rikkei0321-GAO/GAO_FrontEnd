export class AccountClass {
  private _idAccount: number;
  private _userName: string;
  private _passWord: string;
  private _createDate: Date;
  private _roleID: string;
  private _fullName: string;
  private _brithday: Date;
  private _sex: boolean;
  private _phone: string;
  private _address: string;
  // @ts-ignore
  email: string;
  private _compyName: string
  private _taxtCode: string
  private _link: string;
  private _nameContact: string;
  private _status: boolean;
  private _icon: string;


  constructor(idAccount: number, userName: string, passWord: string, createDate: Date, roleID: string, fullName: string, brithday: Date, sex: boolean, phone: string, address: string, email: string, compyName: string, taxtCode: string, link: string, nameContact: string, status: boolean, icon: string) {
    this._idAccount = idAccount;
    this._userName = userName;
    this._passWord = passWord;
    this._createDate = createDate;
    this._roleID = roleID;
    this._fullName = fullName;
    this._brithday = brithday;
    this._sex = sex;
    this._phone = phone;
    this._address = address;
    this.email = email;
    this._compyName = compyName;
    this._taxtCode = taxtCode;
    this._link = link;
    this._nameContact = nameContact;
    this._status = status;
    this._icon = icon;
  }



  get idAccount(): number {
    return this._idAccount;
  }

  set idAccount(value: number) {
    this._idAccount = value;
  }

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  get passWord(): string {
    return this._passWord;
  }

  set passWord(value: string) {
    this._passWord = value;
  }

  get createDate(): Date {
    return this._createDate;
  }

  set createDate(value: Date) {
    this._createDate = value;
  }

  get roleID(): string {
    return this._roleID;
  }

  set roleID(value: string) {
    this._roleID = value;
  }

  get fullName(): string {
    return this._fullName;
  }

  set fullName(value: string) {
    this._fullName = value;
  }

  get brithday(): Date {
    return this._brithday;
  }

  set brithday(value: Date) {
    this._brithday = value;
  }

  get sex(): boolean {
    return this._sex;
  }

  set sex(value: boolean) {
    this._sex = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  // @ts-ignore
  get email(): string {
    return this.email;
  }

  // @ts-ignore
  set email(value: string) {
    this.email = value;
  }

  get compyName(): string {
    return this._compyName;
  }

  set compyName(value: string) {
    this._compyName = value;
  }

  get taxtCode(): string {
    return this._taxtCode;
  }

  set taxtCode(value: string) {
    this._taxtCode = value;
  }

  get link(): string {
    return this._link;
  }

  set link(value: string) {
    this._link = value;
  }

  get nameContact(): string {
    return this._nameContact;
  }

  set nameContact(value: string) {
    this._nameContact = value;
  }

  get status(): boolean {
    return this._status;
  }

  set status(value: boolean) {
    this._status = value;
  }

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }
}
