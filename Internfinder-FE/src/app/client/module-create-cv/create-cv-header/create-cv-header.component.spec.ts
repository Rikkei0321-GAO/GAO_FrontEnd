import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCvHeaderComponent } from './create-cv-header.component';

describe('CreateCvHeaderComponent', () => {
  let component: CreateCvHeaderComponent;
  let fixture: ComponentFixture<CreateCvHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCvHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCvHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
