export class Employee {
  public firstName: string
  public lastName: string
  public email: string
  public phone: number
  public account: number

  public constructor(firstName: string, lastName: string, email: string, phone: number, account: number) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.phone = phone
    this.account = account
  }
}
