import {Component, OnInit} from '@angular/core';
import {Employee} from "./employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.css']
})
export class EmployeeComponent implements OnInit {
  private httpClient: HttpClient

  employees: Employee[] = []

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  ngOnInit(): void {
   this.updateDisplayList()
  }

  firstName = ""
  lastName = ""
  accountNumber = 0
  phoneNumber = 0
  email = ""

  /**
   *      {
   *        "firstName": "pooja",
   *        "lastName": "gulshetty",
   *        "pho": ""
   *      }
   */
  createEmployee() {
    const employee = new Employee(this.firstName, this.lastName, this.email, this.phoneNumber, this.accountNumber)
    const body = JSON.stringify(employee);
    console.log(body)
    let header = new HttpHeaders({'Content-Type': 'application/json'});
    this.httpClient.post("http://localhost:9001/employees", body, {headers: header})
      .subscribe(
        suc => {
          console.log("successfully created " + suc.toString())
          this.updateDisplayList()
        },
        error => console.log(error)
      )
  }

  updateDisplayList() {
    let employeeList = this.httpClient.get<Employee[]>("http://localhost:9001/employees")

      employeeList.subscribe(
        values => {
          this.employees = values
        },
        error => console.log(error)
      )
  }

}
