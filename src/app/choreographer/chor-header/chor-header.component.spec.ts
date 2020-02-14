import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChorHeaderComponent } from './chor-header.component';

describe('ChorHeaderComponent', () => {
  let component: ChorHeaderComponent;
  let fixture: ComponentFixture<ChorHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChorHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
