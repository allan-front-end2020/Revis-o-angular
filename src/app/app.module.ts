import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './compomnentes/primeiro-componente/primeiro-componente.component';
import { ParentDataComponent } from './compomnentes/parent-data/parent-data.component';
import { DirectivesComponent } from './compomnentes/directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    ParentDataComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
