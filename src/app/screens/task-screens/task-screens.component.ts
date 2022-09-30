import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-screens',
  templateUrl: './task-screens.component.html',
  styleUrls: ['./task-screens.component.scss']
})
export class TaskScreensComponent implements OnInit {

  tasklists: any[]=[];
  tasks: any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
