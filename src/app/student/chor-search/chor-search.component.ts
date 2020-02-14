import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Choreographer } from 'src/app/model/choreographer.model';
import { StudentServiceService } from 'src/app/student-service/student-service.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-chor-search',
  templateUrl: './chor-search.component.html',
  styleUrls: ['./chor-search.component.css']
})
export class ChorSearchComponent implements OnInit {

  choreographer: Choreographer;
  choreographers: Choreographer[];
  fName:String;
  lName:String;
  danceStyle:String;
  danceStyles: string[] = ["Salsa","Ballet", "Bharatnatyam", "Kathak","Tango"];
  found: boolean = false;


  

  constructor(private service: StudentServiceService, private router: Router, private userservice: UserService) {
    
   }

  ngOnInit() {
    if(this.userservice.student.studentId == undefined)
    {
      this.router.navigate(['login']);
    }
  }

  // findChoreographerByName(){
  //   this.service.findChorByName(this.fName,this.lName).subscribe(data => this.choreographer = data);
  // }

  findChoreographerByDance(){
    this.service.findChorByDance(this.danceStyle).subscribe(data => {this.choreographers = data;
    if(this.choreographers != null){
      this.found = true;
    }
    
    else
    
      this.found = false;
    });
  }

 sortByChorFirstName(){   
   this.choreographers = this.service.sortByChorfName(this.choreographers);
 }

}
