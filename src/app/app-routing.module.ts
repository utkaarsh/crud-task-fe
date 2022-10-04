import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTaskListsComponent } from './screens/new-task-lists/new-task-lists.component';
import { NewTaskScreenComponent } from './screens/new-task-screen/new-task-screen.component';
import {TaskScreensComponent} from './screens/task-screens/task-screens.component';

const routes: Routes = [
  { path:'',redirectTo:'task-list',pathMatch:'full' },
  { path:'task-list',component: TaskScreensComponent },
  { path:'task-list/:tasklistID/tasks',component: TaskScreensComponent },
  { path:'new-task-list',component:NewTaskListsComponent},
  { path:'task-list/:tasklistID/tasks/new-task',component:NewTaskScreenComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
