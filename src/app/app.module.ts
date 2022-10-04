import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskScreensComponent } from './screens/task-screens/task-screens.component';
import { HttpClientModule } from '@angular/common/http';
import { NewTaskListsComponent } from './screens/new-task-lists/new-task-lists.component';
import { NewTaskScreenComponent } from './screens/new-task-screen/new-task-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskScreensComponent,
    NewTaskListsComponent,
    NewTaskScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
