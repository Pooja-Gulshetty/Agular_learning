import {Component, OnInit} from '@angular/core';
import {User} from "./user";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-bhatta',
  templateUrl: './bhatta.component.html',
  styleUrls: ['./abc.css']
})
export class BhattaComponent implements OnInit {

  genders = ["Male", "Female", "Unknown", "Gay"]
  constructor(public httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  number = 0
  firstName = "Enter first name"
  lastName = "Enter last name"
  address = "Enter address"

  user = new User("", "", "", 0, "", "")
  createBhatta() {
    console.log(" phone number  " + this.number)
    console.log(" First name  " + this.firstName)
  }

  createUser() {
    let jsonUserData = JSON.stringify(this.user);
    console.log(jsonUserData)
    let header = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.httpClient
      .post("http://localhost:8080/users", jsonUserData, { headers: header })
      .subscribe(
        value => console.log(value.toString()),
        error => console.log(error)
      )
  }

}
