import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChorSearchComponent } from './chor-search.component';

describe('ChorSearchComponent', () => {
  let component: ChorSearchComponent;
  let fixture: ComponentFixture<ChorSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChorSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChorSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
