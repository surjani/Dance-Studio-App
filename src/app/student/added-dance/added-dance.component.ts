import { Component, OnInit } from '@angular/core';
import { DanceDetails } from 'src/app/model/dance.model';
import { StudentServiceService } from 'src/app/student-service/student-service.service';
import { Student } from 'src/app/model/student.model';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-added-dance',
  templateUrl: './added-dance.component.html',
  styleUrls: ['./added-dance.component.css']
})
export class AddedDanceComponent implements OnInit {

  dances:DanceDetails[];
  student:Student;

  constructor(private service:StudentServiceService, private user: UserService, private router:Router) { 
    this.student = new Student(); 
    //this.dance = new DanceDetails();
  }

  ngOnInit() {
    // this.dance.student.studentId = this.user.student.studentId;
    // this.dance = this.service.dance;
    if(this.user.student.studentId != undefined){
      this.student = this.user.student;
      this.service.getEventByStudentId(this.student.studentId).subscribe(data => {this.dances = data;})
      //this.service.findDanceDetails(this.choreographer.choreographerId).subscribe(data => {this.events = data});
       }
       else{
         this.router.navigate(['dance-add']);
       }
  }

}
