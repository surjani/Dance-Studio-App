import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private service: UserService) { }

  ngOnInit() {
  }

  logout(){
    if(this.service.student.studentId != undefined){
      this.service.student = null;
      this.router.navigate(['login']);
    }
    else{
      this.router.navigate(['login']);
    }
    
  }

}
