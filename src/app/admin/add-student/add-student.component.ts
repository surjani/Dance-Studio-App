import { Component, OnInit } from '@angular/core';
import { Student } from '../../model/student.model';
import { AdminServiceService } from '../../admin-service/admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student: Student;
  students:Student[];

  constructor(private service:AdminServiceService, private route:Router) {
    this.student =  new Student();
   }

  ngOnInit() {
    if(sessionStorage.getItem("aduserName") != null){
    this.service.listStudents().subscribe(data => {this.students = data;});
    }
  }

  studentApproval(studentId: number){
    this.service.addStudent(studentId).subscribe(data => { this.student = data;
     });
      }
  }


