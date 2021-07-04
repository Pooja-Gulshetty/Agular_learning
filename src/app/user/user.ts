export class User {
  public  firstName: string
  public  lastName: string
  public  phone:number
  public email:string

  public constructor(firstName:string,lastName:string,phone:number,email:string) {
    this.firstName=firstName
    this.lastName=lastName
    this.phone=phone
    this.email=email
  }

}
