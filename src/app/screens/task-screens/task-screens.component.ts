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
  taskListId:string='';

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
        this.taskListId= params['tasklistID']; 
        console.log('tasklistId =>', this.taskListId);
        console.log("Params is an",typeof(params),"type of variable",params);
        if(params['tasklistID']){
          this.taskService.getAllTasksForTaskLists(params['tasklistID']).subscribe(
            (tasks:taskModel[])=>this.tasks=tasks
          );
        }
           }
    )
  }

  taskClicked(task:taskModel){
    console.log("Task Object",task);
     this.taskService.updateTask(this.taskListId,task).subscribe(
      ()=>task.completed=!task.completed
    );
   }
  
   deleteTask(task:taskModel){
    console.log("Task Deleted");
    this.taskService.deleteTaskInsideATaskList(this.taskListId,task._id)
    .subscribe(
      (taskDeleted:taskModel)=>
      this.tasks=this.tasks.filter(t=>t._id != taskDeleted._id) //remove the deleted task from the task
    )
   }

   deleteTaskList(taskListClicked:taskListModel){
    console.log("Task List Deleted");
    this.taskService.deleteTaskList(taskListClicked._id)
    .subscribe(
      ()=>{
        this.tasklists=this.tasklists.filter(tL=>tL._id != taskListClicked._id)
      }
    )
   }

   addNewTask(){
    if(this.taskListId){
      //route the user to add task screen for the selected tasklist
      this.router.navigate(['./new-task'],{relativeTo:this.activatedRoute})
   }else{
    alert('Please select a tasklist!')
   }
  }
}
