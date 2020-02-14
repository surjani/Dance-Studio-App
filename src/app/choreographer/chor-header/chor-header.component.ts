import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-chor-header',
  templateUrl: './chor-header.component.html',
  styleUrls: ['./chor-header.component.css']
})
export class ChorHeaderComponent implements OnInit {

  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
 
  }

  logout(){
    if(this.service.choreographer.choreographerId != undefined){
      this.service.choreographer = null;
      this.router.navigate(['login']);
    }
  }

}
