import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlycvSvComponent } from './quanlycv-sv.component';

describe('QuanlycvSvComponent', () => {
  let component: QuanlycvSvComponent;
  let fixture: ComponentFixture<QuanlycvSvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlycvSvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlycvSvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
