import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student.model';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {

  student: Student;
  //choreographer: Choreographer;
  signupSuccess:boolean;

  constructor(private service: UserService, private route: Router) { 
   //this.choreographer = new Choreographer();
   this.student = new Student();
  }

  ngOnInit() {
    this.signupSuccess = false;
  }

  registerStudent(){
    this.service.registerStudent(this.student).subscribe(data => {this.student = data;
    if(this.student.userName != null)
  {
   sessionStorage.setItem("firstName", this.student.fName);
   sessionStorage.setItem("lastName", this.student.lName);
   alert("Registration Successful!!!");
   this.route.navigate(['/login-user']); 
  }
  else
  {
    alert("Sign up failed!!!");
    this.student = new Student();
    this.route.navigate(['/register-user']);
  }
})

  }


}
