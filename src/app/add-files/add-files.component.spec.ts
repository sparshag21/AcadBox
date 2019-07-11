import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFilesComponent } from './add-files.component';

describe('AddFilesComponent', () => {
  let component: AddFilesComponent;
  let fixture: ComponentFixture<AddFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
