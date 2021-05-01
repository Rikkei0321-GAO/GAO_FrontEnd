export class AccountClass {
  id_account: number; //cái ni idAccount nó k trùng tên là nó k nhận diện đc oke roi tks you
  username: string;
  password: string;
  createDate: Date;
  fullName: string;
  birthday: Date;
  sex: boolean;
  phone: string;
  address: string;
  email: string;
  email_contact: string;
  companyName: string
  taxCode: string
  link: string;
  nameContact: string;
  status: boolean;
  image: string;


  constructor(id_account: number, username: string, password: string, createDate: Date, fullName: string, birthday: Date, sex: boolean, phone: string, address: string, email: string, email_contact: string, companyName: string, taxCode: string, link: string, nameContact: string, status: boolean, image: string) {
    this.id_account = id_account;
    this.username = username;
    this.password = password;
    this.createDate = createDate;
    this.fullName = fullName;
    this.birthday = birthday;
    this.sex = sex;
    this.phone = phone;
    this.address = address;
    this.email = email;
    this.email_contact = email_contact;
    this.companyName = companyName;
    this.taxCode = taxCode;
    this.link = link;
    this.nameContact = nameContact;
    this.status = status;
    this.image = image;
  }
}
