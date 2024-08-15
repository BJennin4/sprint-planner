import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncsService {

  constructor() { }

  /* Reads info from any JSON file into any object array */
  getJson(jsonInfo$: Observable<any[]>, arr: any[]){
    // There is definitely a better way to do this
    // - Needs type safety and should be done without mutiple forEach calls
    jsonInfo$.forEach(element => {
      element.forEach(item => {
        arr.push(item);
      })
    })
  }
}
