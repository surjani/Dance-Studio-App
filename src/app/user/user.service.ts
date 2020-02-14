import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../model/login.model';
import { Student } from '../model/student.model';
import { Choreographer } from '../model/choreographer.model';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  student:Student;
  choreographer:Choreographer;
  constructor(public http: HttpClient) {
    this.student = new Student();
    this.choreographer =  new Choreographer();
   }
 
   
 
  validateStudent(login : Login){
     return this.http.post<Student>("http://localhost:8902/student/loginStudent", login).pipe(retry(1),catchError(this.errorHandler));

   }


   validateChoreographer(login : Login ){
     
     return this.http.post<Choreographer>("http://localhost:8902/choreographer/loginChor", login).pipe(retry(1),catchError(this.errorHandler));

   }

   registerStudent(student : Student){

    return this.http.post<Student>("http://localhost:8902/student/regStudent", student);
     
   }

   registerChoreographer(choreographer: Choreographer){
     
    return this.http.post<Choreographer>("http://localhost:8902/choreographer/regChor", choreographer);
   }

   errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) { //client side error
      errorMessage = `Error: ${error.error.message}`;
    }
    else { //server side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.error}`;
    }
    window.alert(errorMessage);
    return throwError(error.error)
  }

}
