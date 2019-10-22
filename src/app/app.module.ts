import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorsComponent } from './colors/colors.component';
import { AnimalsComponent } from './animals/animals.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorsComponent,
    AnimalsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
