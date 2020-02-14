import { Component, OnInit } from '@angular/core';
import { Choreographer } from 'src/app/model/choreographer.model';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chor-details',
  templateUrl: './chor-details.component.html',
  styleUrls: ['./chor-details.component.css']
})
export class ChorDetailsComponent implements OnInit {
  choreographer:Choreographer;
  constructor(private service: UserService, private router:Router) {
    this.choreographer = new Choreographer();
   }

  ngOnInit() {
    if(this.service.choreographer.choreographerId != undefined){
      this.choreographer = this.service.choreographer;
    }
    else
    {
      this.router.navigate(['login']);
    }
  }

}
