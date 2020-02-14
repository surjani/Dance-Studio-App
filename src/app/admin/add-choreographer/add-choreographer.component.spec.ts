import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChoreographerComponent } from './add-choreographer.component';

describe('AddChoreographerComponent', () => {
  let component: AddChoreographerComponent;
  let fixture: ComponentFixture<AddChoreographerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChoreographerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChoreographerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
