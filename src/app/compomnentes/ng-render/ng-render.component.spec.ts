import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRenderComponent } from './ng-render.component';

describe('NgRenderComponent', () => {
  let component: NgRenderComponent;
  let fixture: ComponentFixture<NgRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
