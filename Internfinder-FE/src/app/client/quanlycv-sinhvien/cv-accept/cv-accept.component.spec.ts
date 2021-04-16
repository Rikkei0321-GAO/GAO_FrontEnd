import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvAcceptComponent } from './cv-accept.component';

describe('CvAcceptComponent', () => {
  let component: CvAcceptComponent;
  let fixture: ComponentFixture<CvAcceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvAcceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
