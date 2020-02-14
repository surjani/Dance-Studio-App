import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterChorComponent } from './register-chor.component';

describe('RegisterChorComponent', () => {
  let component: RegisterChorComponent;
  let fixture: ComponentFixture<RegisterChorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterChorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterChorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
