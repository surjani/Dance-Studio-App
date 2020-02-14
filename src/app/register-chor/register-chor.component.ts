import { Component, OnInit } from '@angular/core';
import { Choreographer } from '../model/choreographer.model';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-chor',
  templateUrl: './register-chor.component.html',
  styleUrls: ['./register-chor.component.css']
})
export class RegisterChorComponent implements OnInit {

  choreographer: Choreographer;
  signupSuccess: boolean;
  danceStyles: string[] = ["Salsa","Ballet", "Bharatnatyam", "Kathak","Tango"];
  timePref:string[] = ["Morning", "Afternoon", "Evening"];
  places:string[] = ["Studio", "Home"];

  constructor(private service: UserService, private route: Router) { 
    this.choreographer =  new Choreographer;
    

  }

  ngOnInit() {
    this.signupSuccess = false;
  }

  
  registerChoreographer(){
    this.service.registerChoreographer(this.choreographer).subscribe(data => {this.choreographer = data;
    if(this.choreographer.userName != null)
  {
   sessionStorage.setItem("firstName", this.choreographer.fName);
   sessionStorage.setItem("lastName", this.choreographer.lName);
   alert("Choreographer Registration Successful!!!");
   this.route.navigate(['/login-user']); 
  }
  else
  {
    alert("Sign up failed!!!");
    this.choreographer = new Choreographer();
    this.route.navigate(['/register-chor']);
  }
})

  }

}
