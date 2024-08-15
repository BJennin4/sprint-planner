import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';
import { FuncsService } from '../funcs.service';

@Component({
  selector: 'app-make-task',
  standalone: true,
  imports: [],
  templateUrl: './make-task.component.html',
  styleUrl: './make-task.component.css'
})
export class MakeTaskComponent implements OnInit {
  tasks: Task[] = [];
  jsonInfo$: Observable<Task[]> = new Observable<Task[]>;
  func: FuncsService = new FuncsService;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.jsonInfo$ = this.http.get<Task[]>('./assets/data.json');

    // Reads info from JSON file into tasks array
    this.func.getJson(this.jsonInfo$,this.tasks);
  }
}
