import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Params} from '@angular/router';
import { taskListModel } from 'src/app/models/tasklistmodel';
import { taskModel } from 'src/app/models/taskmodel';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-screens',
  templateUrl: './task-screens.component.html',
  styleUrls: ['./task-screens.component.scss']
})
export class TaskScreensComponent implements OnInit {

  tasklists: taskListModel[]=[];
  tasks: taskModel[]=[];
  task:taskModel[]=[];
  tasklistID:string=''


  constructor(
    private taskService:TaskService,
    private activatedRoute:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.taskService.getAllTaskLists().subscribe(
      allTaskLists=> {
        this.tasklists= allTaskLists;
         //Get the first task list and id and route it on page load
      this.router.navigate(['task-list',this.tasklists[0]['_id'],'tasks']);
      }
    );
  
    this.activatedRoute.params.subscribe(
      (params:Params)=>{
        console.log('Params data =>', params['tasklistID']);
        const taskListId= params['taskListID']; 
        console.log('tasklistId =>', taskListId);
        console.log("Params is an",typeof(params),"type of variable",params);
        if(params['tasklistID']){
          this.taskService.getAllTasksForTaskLists(params['tasklistID']).subscribe(
            (tasks:taskModel[])=>this.tasks=tasks
          );
        }
           }
    )
  }

  taskClicked(task:taskModel[]){
    console.log("Touched the task",task);
    //  this.taskService.updateTask(params['taskListID'],task)
    
  }
}
