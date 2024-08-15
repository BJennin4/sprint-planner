import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { TaskGroup } from '../taskGroup';
import { FuncsService } from '../funcs.service';

@Component({
  selector: 'app-make-group',
  standalone: true,
  imports: [],
  templateUrl: './make-group.component.html',
  styleUrl: './make-group.component.css'
})
export class MakeGroupComponent implements OnInit {
  // taskGroups: TaskGroup[] = [];
  // jsonInfo$: Observable<TaskGroup[]> = new Observable<TaskGroup[]>;
  func: FuncsService = new FuncsService;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.jsonInfo$ = this.http.get<TaskGroup[]>('./assets/data.json');

    // Reads info from JSON file into tasks array
    // this.func.getJson(this.jsonInfo$,this.taskGroups);
  }
}
