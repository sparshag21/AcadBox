import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursewiseMaterialComponent } from './coursewise-material.component';

describe('CoursewiseMaterialComponent', () => {
  let component: CoursewiseMaterialComponent;
  let fixture: ComponentFixture<CoursewiseMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursewiseMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursewiseMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
