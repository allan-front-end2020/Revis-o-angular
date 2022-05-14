import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './compomnentes/primeiro-componente/primeiro-componente.component';
import { ParentDataComponent } from './compomnentes/parent-data/parent-data.component';
import { DirectivesComponent } from './compomnentes/directives/directives.component';
import { NgRenderComponent } from './compomnentes/ng-render/ng-render.component';
import { EventosComponent } from './compomnentes/eventos/eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    ParentDataComponent,
    DirectivesComponent,
    NgRenderComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
