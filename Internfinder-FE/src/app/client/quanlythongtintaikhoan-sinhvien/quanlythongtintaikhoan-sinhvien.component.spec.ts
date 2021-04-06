import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlythongtintaikhoanSinhvienComponent } from './quanlythongtintaikhoan-sinhvien.component';

describe('QuanlythongtintaikhoanSinhvienComponent', () => {
  let component: QuanlythongtintaikhoanSinhvienComponent;
  let fixture: ComponentFixture<QuanlythongtintaikhoanSinhvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlythongtintaikhoanSinhvienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlythongtintaikhoanSinhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
