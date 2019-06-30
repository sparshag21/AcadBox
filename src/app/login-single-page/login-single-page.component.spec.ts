import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSinglePageComponent } from './login-single-page.component';

describe('LoginSinglePageComponent', () => {
  let component: LoginSinglePageComponent;
  let fixture: ComponentFixture<LoginSinglePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSinglePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSinglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
