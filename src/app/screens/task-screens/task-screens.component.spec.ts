import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskScreensComponent } from './task-screens.component';

describe('TaskScreensComponent', () => {
  let component: TaskScreensComponent;
  let fixture: ComponentFixture<TaskScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskScreensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
