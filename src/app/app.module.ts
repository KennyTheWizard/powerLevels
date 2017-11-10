import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule


import { AppComponent } from './app.component';
import { PowerLevelComponent } from './power-level/power-level.component';
import { HumanComponent } from './human/human.component';


@NgModule({
  declarations: [
    AppComponent,
    PowerLevelComponent,
    HumanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
