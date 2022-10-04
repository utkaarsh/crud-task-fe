import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { taskListModel } from 'src/app/models/tasklistmodel';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task-lists',
  templateUrl: './new-task-lists.component.html',
  styleUrls: ['./new-task-lists.component.scss']
})
export class NewTaskListsComponent implements OnInit {

  constructor(

    private router:Router,
    private taskService:TaskService
 
  ) {
   }

  ngOnInit(): void {
  }
  addNewTaskLists(title: string){
    if(title){
      console.log(title);
      this.taskService.createTaskList(title)
      .subscribe(
        (newlyCreatedTaskList:taskListModel)=>{
          this.router.navigate(['task-list', newlyCreatedTaskList._id,'tasks']);

        }
      )
    
    }else{
      alert('Task list cannot be empty ')
    }
      }

}
