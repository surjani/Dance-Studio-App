import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChorDetailsComponent } from './chor-details.component';

describe('ChorDetailsComponent', () => {
  let component: ChorDetailsComponent;
  let fixture: ComponentFixture<ChorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
