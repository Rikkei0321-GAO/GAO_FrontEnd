export class CvCreated {
  id: number;
  firstName: string;
  lastname: string;
  astName: string;
  dayOfBirth: string;
  phone: string;
  email: string;
  gender: string;
  objective: string;
  avatar: string;
  address: string;

  constructor(id: number, firstName: string, lastname: string, astName: string, dayOfBirth: string, phone: string, email: string, gender: string, objective: string, avatar: string, address: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastname = lastname;
    this.astName = astName;
    this.dayOfBirth = dayOfBirth;
    this.phone = phone;
    this.email = email;
    this.gender = gender;
    this.objective = objective;
    this.avatar = avatar;
    this.address = address;
  }
}
