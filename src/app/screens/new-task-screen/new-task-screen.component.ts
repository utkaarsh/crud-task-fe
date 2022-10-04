import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';


@Component({
  selector: 'app-new-task-screen',
  templateUrl: './new-task-screen.component.html',
  styleUrls: ['./new-task-screen.component.scss']
})
export class NewTaskScreenComponent implements OnInit {
  taskListId:string='';

  constructor(   private router:Router,
    private activatedRoute:ActivatedRoute,
    private taskService:TaskService) {
    this.activatedRoute.params.subscribe(
      (params:Params)=>{
        this.taskListId=params['tasklistID'];
        console.log("TASKLISTID:::",this.taskListId)
      }
    )
   }

  ngOnInit(): void {

   
  }
  addNewTask(title: string){
    if(title){
      console.log(title);
      console.log(this.taskListId)
      this.taskService.createTaskForTaskList(this.taskListId,title)
      .subscribe(
        ()=>{
          this.router.navigate(['../'],{relativeTo:this.activatedRoute})

        }
      )
    
    }else{
      alert('Task list cannot be empty ')
    }
      }
}
