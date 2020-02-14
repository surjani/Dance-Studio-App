import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DanceDetails } from '../model/dance.model';
import { Student } from '../model/student.model';
import { Choreographer } from '../model/choreographer.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  dance:DanceDetails;

  // choreographer:Choreographer[];

  student:Student;
  
 

  constructor(private http: HttpClient) { 
    this.student = new Student();
    this.dance = new DanceDetails();
   
  }

  findChoreographerList(dance: DanceDetails){
    return this.http.post<Choreographer[]>("http://localhost:8902/choreographer/choreographerList", dance);
  }

  addDance(danceAdd: DanceDetails){
    console.log(danceAdd);
    return this.http.post<DanceDetails>("http://localhost:8902/student/addDance", danceAdd);
  }



  findStudent(studentId : number){
    return this.http.get<Student>("http://localhost:8902/student/StudentID/" + studentId);

  }

  findChorByName(fName: String, lName: String){
    return this.http.get<Choreographer>("http://localhost:8902/choreographer/getChoreographerByName/" +fName+"/"+lName);
  }

  findChorByDance(danceStyle: String):Observable<Choreographer[]>{
    return this.http.get<Choreographer[]>("http://localhost:8902/choreographer/getChoreographersByDance/" + danceStyle);
  }

  getEventByStudentId(studentId: number):Observable<DanceDetails[]>{
    return this.http.get<DanceDetails[]>("http://localhost:8902/student/eventsByStudentId/" + +studentId);
  }

  sortByChorfName(choreographer: Choreographer[]){
    choreographer.sort((a,b) => a.fName > b.fName ? 1: ((a.fName < b.fName) ? -1:0) );
    return choreographer;
  }

}
