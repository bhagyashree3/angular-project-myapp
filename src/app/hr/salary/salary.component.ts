import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  item:any[]=[
                {
                  "category":"mobile",
                  "product":[
                              {"name":"Mobile1", "price":3000, "qty":5},
                              {"name":"Mobile2", "price":4000, "qty":3}
                            ]
                },

                {
                  "category":"books",
                  "product":[
                              {"name":"PHP", "price":300, "qty":10},
                              {"name":"jAVA", "price":400, "qty":30}
                            ]
                },
             ];

}
