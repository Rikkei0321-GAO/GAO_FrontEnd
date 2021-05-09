import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCvFormComponent } from './create-cv-form.component';

describe('CreateCvFormComponent', () => {
  let component: CreateCvFormComponent;
  let fixture: ComponentFixture<CreateCvFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCvFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCvFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
