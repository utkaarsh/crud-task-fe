import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigService } from './api-config.service';
import { taskListModel } from './models/tasklistmodel';
import { taskModel } from './models/taskmodel';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private apiConfigService:ApiConfigService) { }
  //to fetch all task lists
  getAllTaskLists():Observable<taskListModel[]> {
   return this.apiConfigService.get('tasklists');
  }
   
  //create a tasklists bucket 
   createTaskList(title:string){
    let data={'title':title};
    this.apiConfigService.post('tasklists',data)
   }
  
//To fetch all task inside a tasklist screen model
getAllTasksForTaskLists(taskListId:string):Observable<taskModel[]>{
  return this.apiConfigService.getTasks(`tasklists/${taskListId}/tasks`);
}

//Create a task inside a particular tasklist
createTaskForTaskList(taskListId:string,title:string){
let data={'title':title};
return this.apiConfigService.post(`tasklists/${taskListId}/tasks`,data)

}

//Delete a tasklist
deleteTaskList(taskListId:string){
  return this.apiConfigService.delete(`tasks/${taskListId}`)
}


//Delete a task inside a particular tasklist
deleteTaskInsideATaskList(taskListId:string,taskId:string){
  return this.apiConfigService.delete(`tasks/${taskListId}/tasks/${taskId}`)
}

//Update status of a task
updateTask(taskListId:string,taskObject:taskModel){
  let updateData={'completed':!taskObject.completed};//toggle the database value
  return this.apiConfigService.patch(`tasklists/${taskListId}/`,updateData)
}
}
