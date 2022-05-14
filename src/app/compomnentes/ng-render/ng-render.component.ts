import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-render',
  templateUrl: './ng-render.component.html',
  styleUrls: ['./ng-render.component.css']
})
export class NgRenderComponent implements OnInit {

  canShow: boolean = true;
  name = "Allan";

  constructor() { }

  ngOnInit(): void {
  }

}
