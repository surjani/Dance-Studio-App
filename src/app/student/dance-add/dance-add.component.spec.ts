import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceAddComponent } from './dance-add.component';

describe('DanceAddComponent', () => {
  let component: DanceAddComponent;
  let fixture: ComponentFixture<DanceAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanceAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
