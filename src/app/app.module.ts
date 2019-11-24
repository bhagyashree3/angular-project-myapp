import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
//for routing , navigation
import{RouterModule, Routes} from '@angular/router';
import{HrModule} from './hr/hr.module';
import{UserModule} from './user/user.module';
//client to server communiction
import{HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { ArrayComponent } from './array/array.component';
import { MainhrComponent } from './hr/mainhr/mainhr.component';
import { EmployeeComponent } from './hr/employee/employee.component';
import { SalaryComponent } from './hr/salary/salary.component';
import { LeaveComponent } from './hr/leave/leave.component';
import { LocaljsonComponent } from './localjson/localjson.component';
import { ExternaljsonComponent } from './externaljson/externaljson.component';
//generating path/url for components 
const mypage:Routes = [
                         {path:"welcome", component:ContentComponent},
                         {path:"home", component:HomeComponent},
                         {path:"array1", component:ArrayComponent},
                         {path:"localjson", component:LocaljsonComponent},
                         {path:"externaljson", component:ExternaljsonComponent},
                         {path:"hr", component:MainhrComponent,
                          children:[
                            {path:"employee", component:EmployeeComponent},
                            {path:"salary", component:SalaryComponent},
                            {path:"leave", component:LeaveComponent}
                          ]},
                         {path:"", redirectTo:"/welcome",pathMatch:"full"}
                      ];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    ArrayComponent,
    LocaljsonComponent,
    ExternaljsonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(mypage),
    HrModule,
    UserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
