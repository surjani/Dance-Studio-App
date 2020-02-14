import { Component, OnInit } from '@angular/core';
import { Login } from '../model/login.model';
import { Student } from '../model/student.model';
import { Choreographer } from '../model/choreographer.model';
import { UserService } from '../user/user.service';
import { AdminServiceService } from '../admin-service/admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:Login;
  student:Student;
  choreographer:Choreographer;
  errorMsg: any;

  constructor(private service: UserService, private adservice: AdminServiceService, private route: Router) { 
    this.login = new Login();
    this.student = new Student();
    this.choreographer = new Choreographer(); 
  }

  ngOnInit() {
     
  }

  verifyLogin(){

    if(this.login.role == "Choreographer"){
      this.service.validateChoreographer(this.login).subscribe(data => {this.choreographer = data;
      if(this.choreographer.choreographerId!=undefined){ //for number the checking condition is undefined
        //the above condition is used so that only choreographer will have the access of it
        sessionStorage.setItem("chorfirstName",this.choreographer.fName);
        sessionStorage.setItem("chorlastName", this.choreographer.lName);
        this.service.choreographer = this.choreographer;
        alert("Login Successful");
        this.route.navigate(['chor-dashboard']);
      }

      else
      {
        // alert("Login Failed!!!!");
        // this.login = new Login();
        this.route.navigate(['login']);
      }
    },error=>{this.errorMsg=error;
      this.login= new Login()});
    }

    if(this.login.role == "Student"){
      this.service.validateStudent(this.login).subscribe(data => {this.student = data;
      if(this.student.studentId!=undefined){
        sessionStorage.setItem("firstName",this.student.fName);
        sessionStorage.setItem("lastName", this.student.lName);
        this.service.student = this.student;
        alert("Login Successful");
        this.route.navigate(['student-dashboard']);
      }
      else
      {
        // alert("Login Failed!!!!");
        // this.login = new Login();
        this.route.navigate(['login']);
      }
    },error=>{this.errorMsg=error;
      this.login= new Login()});
    }
    
    if(this.login.role == "Admin") {
       if(this.adservice.loginAdmin(this.login))
       {
         this.route.navigate(['admin-home']);
         alert("Welcome Admin");
       }
       else
       {
         alert("Invalid credentials");
       }
      }
  
    }


}
