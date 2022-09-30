import { Injectable } from '@angular/core';
import { ApiConfigService } from './api-config.service';
import { taskModel } from './models/taskmodel';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private apiCinfigService:ApiConfigService) { }
  //to fetch all task lists
  getAllTaskLists(){
   return this.apiCinfigService.get('tasklists');
  }
   
  //create a tasklists bucket 
   createTaskList(title:string){
    let data={'title':title};
    this.apiCinfigService.post('tasklists',data)
   }
  
//To fetch all task inside a tasklist screen model
getAllTasksForTaskLists(taskListId:string){
  return this.apiCinfigService.get(`tasklists/${taskListId}/tasks`);
}

//Create a task inside a particular tasklist
createTaskForTaskList(taskListId:string,title:string){
let data={'title':title};
return this.apiCinfigService.post(`tasklists/${taskListId}/tasks`,data)

}

//Delete a tasklist
deleteTaskList(taskListId:string){
  return this.apiCinfigService.delete(`tasks/${taskListId}`)
}


//Delete a task inside a particular tasklist
deleteTaskInsideATaskList(taskListId:string,taskId:string){
  return this.apiCinfigService.delete(`tasks/${taskListId}/tasks/${taskId}`)
}

//Update status of a task
updateTask(taskListId:string,taskObject:taskModel){
  let updateData={'completed':!taskObject.completed};//toggle the database value
  return this.apiCinfigService.patch(`tasklists/${taskListId}/`,updateData)
}
}
