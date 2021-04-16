import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlycvComponent } from './quanlycv.component';

describe('QuanlycvComponent', () => {
  let component: QuanlycvComponent;
  let fixture: ComponentFixture<QuanlycvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlycvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlycvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
