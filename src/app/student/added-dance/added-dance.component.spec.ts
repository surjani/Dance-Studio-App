import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedDanceComponent } from './added-dance.component';

describe('AddedDanceComponent', () => {
  let component: AddedDanceComponent;
  let fixture: ComponentFixture<AddedDanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedDanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedDanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
