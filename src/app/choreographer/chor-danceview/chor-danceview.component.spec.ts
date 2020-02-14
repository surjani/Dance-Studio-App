import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChorDanceviewComponent } from './chor-danceview.component';

describe('ChorDanceviewComponent', () => {
  let component: ChorDanceviewComponent;
  let fixture: ComponentFixture<ChorDanceviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChorDanceviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChorDanceviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
