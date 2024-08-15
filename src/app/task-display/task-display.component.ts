import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';
import { FuncsService } from '../funcs.service';
import { CurrentTaskGroupComponent } from '../current-task-group/current-task-group.component';
import { group } from '@angular/animations';

@Component({
  selector: 'app-task-display',
  standalone: true,
  imports: [],
  templateUrl: './task-display.component.html',
  styleUrl: './task-display.component.css'
})

export class TaskDisplayComponent {
  taskGroup: Object = {};
  taskNames: String[] = [];
  tasks: Task[] = [];
  jsonInfo$: Object = [];

  private funcs: FuncsService = new FuncsService;

  constructor(private http: HttpClient) {
    this.http.get<Task[]>('./assets/data.json').subscribe(data => {
      this.jsonInfo$ = data;
      // console.log(this.jsonInfo$);
      this.tasks = this.jsonInfo$['taskList'];
      this.taskNames = Object.keys(this.tasks);
    });
  }
}
