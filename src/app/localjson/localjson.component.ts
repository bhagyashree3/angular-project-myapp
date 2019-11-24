import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-localjson',
  templateUrl: './localjson.component.html',
  styleUrls: ['./localjson.component.css']
})
export class LocaljsonComponent implements OnInit {

  constructor(private httpobj:HttpClient) { }

  ngOnInit() { //it get call when componet load
    this.getuser();
  }
alluser:any[]=[];
getuser()
{
this.httpobj.get("./assets/user1.json").subscribe(
  serverResponse=>{ 
    this.alluser = serverResponse as string[];
  }
  )
}
}

