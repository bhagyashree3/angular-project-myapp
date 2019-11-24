import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  emp:any[]=["Mahesh", "Ganesh", "Suresh", "Mani"];

  itemname:string;
  msg:string;
  save()
  {
    this.emp.push(this.itemname);
    this.itemname="";
    this.msg = "Element Added Successfully !";
  }
  
  
  delemp(index:number)
  {
    this.emp.splice(index, 1);
    this.msg = "Element Deleted Successfully !";
  }



}
