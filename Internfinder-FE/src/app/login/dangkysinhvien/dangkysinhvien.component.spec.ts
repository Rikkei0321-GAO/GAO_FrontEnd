import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DangkysinhvienComponent} from './dangkysinhvien.component';

describe('DangkysinhvienComponent', () => {
  let component: DangkysinhvienComponent;
  let fixture: ComponentFixture<DangkysinhvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DangkysinhvienComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DangkysinhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
