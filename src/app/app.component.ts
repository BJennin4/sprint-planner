import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './Task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'newApp';
  subtitle = "hello this is also text";
  jsonInfo$: Observable<Task[]> = new Observable<Task[]>;

  constructor(private http: HttpClient) {}

  showTask(t: Task){
    this.title = t.itemName;
    if(t.itemNotes){
      this.subtitle = t.itemNotes;
    } else {
      this.subtitle = "";
    }
  }
}





/* 
App
- Navbar
  - Lists:
    - Sprints / Tasks / Completed / Teams
- Title
(User Validation for Officers/Non Officers)
- Could use a password for each, easy to implement but no real validation

Sprints (Home)
- List Sprints
  - Date Range
  - Name/Number
  - Notes
- Button to make sprint at top
- Newest sprint listed on top, older sprints descending
- Clicking the sprint links to that sprint's page

Tasks
- Lists all tasks
  - Associated sprint(s) listed on each task
  - All other info listed on each task
  - Ability to assign a task to a sprint
  - Clicking on task links to that task's page

Completed Tasks
- Lists tasks marked as "Completed"

Teams
- List of teams
- Clicking on team links to team's page

Make Sprint
- Creates a new sprint

Make Task
- Creates a new task

Specific Sprint
- Lists the details of a specific sprint
- Tasks can be assigned/unassigned

Specific Task
- Lists the details of a specific task
- Task can be assigned/unassigned

Specific Team
- Lists sprints associated w/ team
- Lists users associated w/ team
- Add/Remove user


Data {
- List of Tasks
  - Number
  - Name
  - Associated Sprint (Optional)
  - Associated User (Optional)
  - Notes
  - Status (new | todo | working | review | completed)
  - Associated Team
- Teams
  - Name
    - Users
      - Name
      - Number
      - Role
    - Sprints
      - Number
      - Time Range/Name
      - Notes
}
*/
