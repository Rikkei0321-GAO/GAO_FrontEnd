import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGgComponent } from './login-gg.component';

describe('LoginGgComponent', () => {
  let component: LoginGgComponent;
  let fixture: ComponentFixture<LoginGgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginGgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginGgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
