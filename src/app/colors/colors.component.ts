import { Component, OnInit } from '@angular/core';
import { UpdateStuffService } from "../services/update-stuff.service";

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
  colors:Array<string>=["purple","blue","yellow","green","orange","pink","aqua"]
  color:string;
  constructor(private stuffService: UpdateStuffService) { }

  ngOnInit() {
    this.stuffService.stuffObserver$.subscribe(
      value =>{
      console.log("value from colors component: ",value)
      if(value.color) this.color = value.color;
    })
  }

  pickColor(){
    const randomNumber = Math.floor(Math.floor(this.colors.length) * Math.random());
    const color = this.colors[randomNumber];
    this.stuffService.changeValue("color",color);
  }
}
