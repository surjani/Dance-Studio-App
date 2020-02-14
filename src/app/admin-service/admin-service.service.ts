import { Injectable } from '@angular/core';
import { Student } from '../model/student.model';
import { Choreographer } from '../model/choreographer.model';
import { HttpClient } from '@angular/common/http';
import { Login } from '../model/login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  student: Student;
  choreographer: Choreographer; 
  students: Student[] = [];
  choreographers: Choreographer[] = [];

  constructor(public http:HttpClient) { }

  loginAdmin(login: Login){
     
    
    if(login.userName == "Admin@gmail.com" && login.password == "Admin1234" && login.role == "Admin")
    {
    sessionStorage.setItem("aduserName",login.userName);
    sessionStorage.setItem("role",login.role);
    return true;
  }
  else{
      return false;
    }
    
  }

  addStudent(studentId : number){
    return this.http.post<Student>("http://localhost:8902/admin/addStudent/" + +studentId, Student); 
  }

  addChoreographer(choreographerId: number) : Observable<Choreographer>{
    return this.http.post<Choreographer>("http://localhost:8902/admin/addChoreographer/" + choreographerId, Choreographer); //incomplete (add choreographerId as path variable)
  }

  listStudents():Observable<any>{
    return this.http.get<Student[]>("http://localhost:8902/student/getAllStudents");
  }

  listChoreographers():Observable<any>{
    return this.http.get<Choreographer[]>("http://localhost:8902/choreographer/getAllChoreographers");
  }


}
