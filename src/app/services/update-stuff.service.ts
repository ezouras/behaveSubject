import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { stuff } from "../models/stuff";

@Injectable({
  providedIn: 'root'
})
export class UpdateStuffService {

  private stuffObject:stuff = {animal:"",color:""};

  constructor() { }

  private randomPickedStuff = new BehaviorSubject(this.stuffObject);

  public stuffObserver$:Observable<stuff> =this.randomPickedStuff.asObservable();

  changeValue(key:string, newValue:string){
    if(key === "animal") this.randomPickedStuff.value.animal = newValue;
    if(key === "color") this.randomPickedStuff.value.color = newValue;
    this.randomPickedStuff.next(this.randomPickedStuff.getValue())

  }

/*
  public updateValue(value){
    this.randomPickedStuff.g
  }


  getAnimal(){
  this.randomPickedStuff.animal;
  }

  getColor(){
  this.randomPickedStuff.color;
  }

  getFood(){
  this.randomPickedStuff.food;
  }
  */
}
