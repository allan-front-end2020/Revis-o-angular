import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent implements OnInit {
  nome : string = ' allan '
  idade :number =32
  hobbies = ['estudar' , 'sair ' , ' tocar viola']



  constructor() { }

  ngOnInit(): void {
  }

}
