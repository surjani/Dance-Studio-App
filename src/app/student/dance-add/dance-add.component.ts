import { Component, OnInit } from '@angular/core';
import { DanceDetails } from '../../model/dance.model';
import { Choreographer } from '../../model/choreographer.model';
import { Student } from '../../model/student.model';
import { UserService } from '../../user/user.service';
import { Router } from '@angular/router';
import { StudentServiceService } from '../../student-service/student-service.service';

@Component({
  selector: 'app-dance-add',
  templateUrl: './dance-add.component.html',
  styleUrls: ['./dance-add.component.css']
})
export class DanceAddComponent implements OnInit {
  danceadded: DanceDetails;
  dance: DanceDetails;
  choreographer: Choreographer;
  choreographers:Choreographer[];
  student: Student;
  studentId:number;
  danceStyles: string[] = ["Salsa","Ballet", "Bharatnatyam", "Kathak","Tango"];
  timePref:string[] = ["Morning", "Afternoon", "Evening"];
  places:string[] = ["Studio", "Home"];
  found: boolean = false;


  constructor(private service: StudentServiceService, private userservice: UserService, private router: Router) {
    this.dance = new DanceDetails();
    //this.danceadded = new DanceDetails(); 
    this.choreographer =  new Choreographer();
    this.student = new Student();
   }

  ngOnInit() {
    this.student.studentId = this.userservice.student.studentId; // can be edited in the web page, so check that part
  }

  // addDanceDetails(){
  //     this.dance.student = this.userservice.student; 
  //     //this.service.addDance(this.dance).subscribe(data => {this.danceadded = data;
  //     this.service.dance = this.danceadded;});
  //     //this.router.navigate(['added-dance'])
  // }
   findChoreographerList(){
     this.service.findChoreographerList(this.dance).subscribe(data =>{this.choreographers = data;
    if(this.choreographers.length > 0){
      this.found = true;
    }
    else
    {
      this.found = false;
    }
    });      
   }

   addDanceDetails(chor: Choreographer){
     this.dance.student = this.userservice.student;
     this.dance.choreographer = chor;
     //console.log(this.dance);
     this.service.addDance(this.dance).subscribe(data => {this.dance = data;
    //this.service.dance = this.danceadded;
  });
    this.router.navigate(['added-dance'])
     //console.log(this.dance);
     
   }

  //  viewStudentCourse(){
  //    this.router.navigate(['added-dance']);
  //  }

}
