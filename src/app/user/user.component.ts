import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../bhatta/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  private httpClient: HttpClient

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  ngOnInit(): void {
    this.updateDisplyaList()
  }


  firstName = ""
  lastName = ""
  email = ""
  phoneNumber = 0
  accountNumber = 0


  createUser() {
    const user = new User(this.firstName, this.lastName, this.email, this.phoneNumber, this.accountNumber);
    const body = JSON.stringify(user);
    let header = new HttpHeaders({'Content-Type': 'application/json'});

    this.httpClient.post("http://localhost:9000/users", body, {headers: header})
      .subscribe(
        suc => {
          console.log("created successfully." + suc.toString())
          this.updateDisplyaList()
          this.firstName = ""
          this.lastName = ""
          this.email = ""
          this.phoneNumber = 0
          this.accountNumber = 0

        },
        error => console.log(error)
      )

  }

  users: User[] = []

  updateDisplyaList() {
    let userList = this.httpClient.get<User[]>("http://localhost:9000/users")
    userList.subscribe(
      value => {
        this.users = value;
      },
      error => console.log(error)
    )
  }

  searchName = ""
  result: User = new User("", "", "", 0, 0)

  searchUser() {
    this.httpClient.get<User>("http://localhost:9000/users/" + this.searchName)
      .subscribe(
        suc => {
          console.log(suc)
          this.result = suc
        },
        error => {
          console.log(error)
        }
      )
  }


}


