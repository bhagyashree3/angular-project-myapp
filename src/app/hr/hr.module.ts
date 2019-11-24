import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { MainhrComponent } from './mainhr/mainhr.component';
import { EmployeeComponent } from './employee/employee.component';
import { SalaryComponent } from './salary/salary.component';
import { LeaveComponent } from './leave/leave.component';



@NgModule({
  declarations: [MainhrComponent, EmployeeComponent, SalaryComponent, LeaveComponent],
  imports: [
    CommonModule,RouterModule, FormsModule
  ]
})
export class HrModule { }
