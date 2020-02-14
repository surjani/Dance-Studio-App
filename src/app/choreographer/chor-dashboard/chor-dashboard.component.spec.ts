import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChorDashboardComponent } from './chor-dashboard.component';

describe('ChorDashboardComponent', () => {
  let component: ChorDashboardComponent;
  let fixture: ComponentFixture<ChorDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChorDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
