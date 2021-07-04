import {Component, OnInit} from '@angular/core';
import {Cook} from "./cook";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {getSuperClassDeclarations} from "@angular/core/schematics/migrations/static-queries/angular/super_class";


@Component({
  selector: 'app-coock',
  templateUrl: './coock.component.html',
  styleUrls: ['./coock.component.sass']
})
export class CookComponent implements OnInit {
  private httpClient: HttpClient

  coocks: Cook[] = []

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  ngOnInit(): void {
    this.updateDisplayList()

  }

  searchPhoneNumber = 0
  firstName = ""
  lastName = ""
  phoneNumber = 0
  email = ""

  createCoock() {
    const cook = new Cook(this.firstName, this.lastName, this.phoneNumber, this.email);
    const body = JSON.stringify(cook);

    let header = new HttpHeaders({'Content-Type': 'application/json'});

    this.httpClient.post("http://localhost:9000/coocks", body, {headers: header})
      .subscribe(
        suc => {
          console.log("created successfully." + suc.toString())
          this.updateDisplayList()
          this.firstName = ""
          this.lastName = ""
          this.email = ""
          this.phoneNumber = 0
        },

        error => console.log(error)
      )
  }

  updateDisplayList() {
    let coockList = this.httpClient.get<Cook[]>("http://localhost:9000/coocks")


    coockList.subscribe(
      value => {
        this.coocks = value;
      },
      error => console.log(error)
    )
  }

  result: Cook = new Cook("", "", 0, "")

  searchCoock() {
    this.httpClient.get<Cook>("localhttp://host:9000/coocks/" + this.searchPhoneNumber)
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

  values: Cook = new Cook("", "", 0, "")

  findcoockforGivenemail() {
    this.httpClient.get<Cook>("localhttp://host:9000/coocks/")
      .subscribe(
        suc => {
          console.log(suc)
          this.result = (suc)

        },
        error => {
          console.log(error)
        }
      )

  }

}
