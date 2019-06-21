import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCourseListComponent } from './user-course-list.component';

describe('UserCourseListComponent', () => {
  let component: UserCourseListComponent;
  let fixture: ComponentFixture<UserCourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCourseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
