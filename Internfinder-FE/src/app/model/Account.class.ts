export class AccountClass {
  idAccount: number;
  username: string;
  password: string;
  createDate: Date;
  fullName: string;
  brithday: Date;
  sex: boolean;
  phone: string;
  address: string;
  email: string;
  compyName: string
  taxtCode: string
  link: string;
  nameContact: string;
  status: boolean;
  image: string;


  constructor(idAccount: number, username: string, password: string, createDate: Date, fullName: string, brithday: Date, sex: boolean, phone: string, address: string, email: string, compyName: string, taxtCode: string, link: string, nameContact: string, status: boolean, image: string) {
    this.idAccount = idAccount;
    this.username = username;
    this.password = password;
    this.createDate = createDate;
    this.fullName = fullName;
    this.brithday = brithday;
    this.sex = sex;
    this.phone = phone;
    this.address = address;
    this.email = email;
    this.compyName = compyName;
    this.taxtCode = taxtCode;
    this.link = link;
    this.nameContact = nameContact;
    this.status = status;
    this.image = image;
  }
}
