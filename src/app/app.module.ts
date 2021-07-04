import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BhattaComponent} from './bhatta/bhatta.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import {CookComponent} from './coock/coock.component';
import {EmployeeComponent} from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { ChefComponent } from './chef/chef.component';

@NgModule({
  declarations: [
    AppComponent,
    BhattaComponent,
    EmployeeComponent,
    CookComponent,
    UserComponent,
    ChefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
