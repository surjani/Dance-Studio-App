import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  

  constructor(private router: Router) {
  
    
   }

  ngOnInit() {
   
  }

  addDance(){
    this.router.navigate(['dance-add']);
  }
  
  search(){
    this.router.navigate(['chor-search']);
  }

  

}
