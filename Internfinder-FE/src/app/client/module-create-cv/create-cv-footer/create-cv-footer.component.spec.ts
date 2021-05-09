import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCvFooterComponent } from './create-cv-footer.component';

describe('CreateCvFooterComponent', () => {
  let component: CreateCvFooterComponent;
  let fixture: ComponentFixture<CreateCvFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCvFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCvFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
