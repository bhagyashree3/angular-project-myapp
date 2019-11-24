import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //multi d - array with multi level 
  item:any[]=[
               {"category":"Mobile", "product":["nokia", "samsung", "intex"]},
               {"category":"Computer", "product":["dell", "wipro","lenovo"]},
               {"category":"Books", "product":["java", "php"]},
               {"category":"jobs", "product":["it", "marketing", "hr"]},
               {"category":"Food", "product":["veg", "nonveg"]}
             ];
  myitem:any[];
  getitem(index:number)
  {
    //alert(index);
    //alert( this.item[index].product );
    this.myitem = this.item[index].product;
  }

}
