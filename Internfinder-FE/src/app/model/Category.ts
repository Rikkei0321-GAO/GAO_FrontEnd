export  class Category{
  idCategory: number
  name:string
  create_date: Date
  status:boolean

  constructor(idCategory: number, name: string, create_date: Date, status: boolean) {
    this.idCategory = idCategory;
    this.name = name;
    this.create_date = create_date;
    this.status = status;
  }
}
