import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student.model';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stprofile',
  templateUrl: './stprofile.component.html',
  styleUrls: ['./stprofile.component.css']
})
export class StprofileComponent implements OnInit {
  student: Student;
  studId: number;
  constructor(private user: UserService, private router: Router) {
    this.student = new Student();
   }

  ngOnInit() {
    if(this.user.student.studentId == undefined){
      this.router.navigate(['login']);
     
    }
    else{
      this.student = this.user.student;
    }
    // this.user.validateStudent(this.stud).subscribe(data => {this.stud = data;});
  }

}
