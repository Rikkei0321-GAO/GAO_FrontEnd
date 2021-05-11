import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSvComponent } from './profile-sv.component';

describe('ProfileSvComponent', () => {
  let component: ProfileSvComponent;
  let fixture: ComponentFixture<ProfileSvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
