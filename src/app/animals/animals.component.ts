import { Component, OnInit } from '@angular/core';
import { UpdateStuffService } from "../services/update-stuff.service";

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  animals:Array<string>=["Dog","Cat","Pig","Mouse","Zebra","Gorilla"];
  animal:string = "";


  constructor(private stuffService: UpdateStuffService) { }

  ngOnInit() {
    console.log("in ngoninit animals")
    this.stuffService.stuffObserver$.subscribe(value=>{
      console.log("value from animals is ",value.animal);
      if(value.animal){
        this.animal = value.animal;
      }
    })
  }

pickAnimal(){
  const randomNumber = Math.floor(Math.floor(this.animals.length)*Math.random());
  const randomAnimal = this.animals[randomNumber];
  this.stuffService.changeValue("animal",randomAnimal);
}
}
