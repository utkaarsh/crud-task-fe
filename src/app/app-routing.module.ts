import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskScreensComponent} from './screens/task-screens/task-screens.component';

const routes: Routes = [
  { path:'',component: TaskScreensComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
