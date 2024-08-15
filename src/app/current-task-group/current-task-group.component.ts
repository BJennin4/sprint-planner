import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';
import { FuncsService } from '../funcs.service';

@Component({
  selector: 'app-current-task-group',
  standalone: true,
  imports: [],
  templateUrl: './current-task-group.component.html',
  styleUrl: './current-task-group.component.css'
})


/* Needs to be able to take input from which task group was clicked on, and return the corresponding list of tasks in the group
- Possibly break down tasks into collections of objects based on groups instead of separate objects entirely */
export class CurrentTaskGroupComponent implements OnInit {
  tasks: Task[] = [];
  jsonInfo$: Observable<Task[]> = new Observable<Task[]>;
  private funcs: FuncsService = new FuncsService;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.jsonInfo$ = this.http.get<Task[]>('./assets/data.json');

    // Reads info from JSON file into tasks array
    this.funcs.getJson(this.jsonInfo$, this.tasks);
  }
}
