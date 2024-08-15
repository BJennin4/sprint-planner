import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sprint, Member, Team } from '../Team';
import { Observable } from 'rxjs';
import { FuncsService } from '../funcs.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})

export class HomePageComponent implements OnInit {
  devTeams: Team[] = [];
  sprints: Object = {};
  jsonInfo$: Object = [];
  // private func: FuncsService = new FuncsService;

  constructor(private http: HttpClient) {
    this.http.get<Object[]>('./assets/data.json').subscribe(data => {
      this.jsonInfo$ = data;
      console.log(this.jsonInfo$);
      this.devTeams = this.jsonInfo$['devTeams']['uxd']['associatedSprints'];
      console.log(this.devTeams); // Need to return list of teams

      // this.tasks = this.jsonInfo$['taskList'];
      // this.taskNames = Object.keys(this.tasks);
    });
  }

  ngOnInit(): void { }
}
