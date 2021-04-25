export class Socialusers {
  provider: string;
  id: string;
  email: string;
  name: string;
  image: string;
  token?: string;
  idToken?: string;


  constructor(provider: string, id: string, email: string, name: string, image: string, token: string, idToken: string) {
    this.provider = provider;
    this.id = id;
    this.email = email;
    this.name = name;
    this.image = image;
    this.token = token;
    this.idToken = idToken;
  }
}
