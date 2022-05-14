import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userNome= "allan tavares";
   age = '32';
   pais  = 'brasil';
  userData ={
    email:'allan.tavares@estudante.ufla.br',
    role:'Admin',
  }
  title = 'RevisaoAngular';
}
