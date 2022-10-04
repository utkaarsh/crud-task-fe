import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskListsComponent } from './new-task-lists.component';

describe('NewTaskListsComponent', () => {
  let component: NewTaskListsComponent;
  let fixture: ComponentFixture<NewTaskListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTaskListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTaskListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
