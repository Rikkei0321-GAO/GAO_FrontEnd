import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DangkyNTTComponent} from './dangky-ntt.component';

describe('DangkyNTTComponent', () => {
  let component: DangkyNTTComponent;
  let fixture: ComponentFixture<DangkyNTTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DangkyNTTComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DangkyNTTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
