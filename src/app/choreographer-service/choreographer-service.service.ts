import { Injectable } from '@angular/core';
import { Choreographer } from '../model/choreographer.model';
import { HttpClient } from '@angular/common/http';
import { DanceDetails } from '../model/dance.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ChoreographerServiceService {
  choreographer:Choreographer;
  dance:DanceDetails;

  
  constructor(private http:HttpClient) {
    this.choreographer = new Choreographer();
    this.dance = new DanceDetails();
   }

   findDanceDetails(choreographerId: number):Observable<DanceDetails[]>{
     console.log(choreographerId);
     return this.http.get<DanceDetails[]>("http://localhost:8902/choreographer/getEventsByChoreographerId/"+ +choreographerId);
   }
}
