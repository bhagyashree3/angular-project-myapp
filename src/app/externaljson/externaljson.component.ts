import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-externaljson',
  templateUrl: './externaljson.component.html',
  styleUrls: ['./externaljson.component.css']
})
export class ExternaljsonComponent implements OnInit {

  constructor(private httpobj:HttpClient) { }

  ngOnInit() {
    this.getitem();
  }
  allitem:any[]=[];

  getitem()
  {
    this.httpobj.get("http://cybotrix.com/ios/car.json").subscribe(
      response=>{
        this.allitem= response as string[];
      }
    )
  }

}
