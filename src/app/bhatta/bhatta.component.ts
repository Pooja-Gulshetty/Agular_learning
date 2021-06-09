import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bhatta',
  templateUrl: './bhatta.component.html',
  styleUrls: ['./bhatta.component.sass']
})
export class BhattaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
number="number"
  firstName="firstName"
  lastName="lastName"
  createbhatta(){
    console.log("number"+this.number)
    console.log("name"+this.firstName)
  }

}
