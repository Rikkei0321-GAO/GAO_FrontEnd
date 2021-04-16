import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlycvNtdComponent } from './quanlycv-ntd.component';

describe('QuanlycvNtdComponent', () => {
  let component: QuanlycvNtdComponent;
  let fixture: ComponentFixture<QuanlycvNtdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlycvNtdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlycvNtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
