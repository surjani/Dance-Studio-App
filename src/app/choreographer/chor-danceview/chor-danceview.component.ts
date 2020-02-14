import { Component, OnInit } from '@angular/core';
import { DanceDetails } from 'src/app/model/dance.model';
import { ChoreographerServiceService } from 'src/app/choreographer-service/choreographer-service.service';
import { Choreographer } from 'src/app/model/choreographer.model';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chor-danceview',
  templateUrl: './chor-danceview.component.html',
  styleUrls: ['./chor-danceview.component.css']
})
export class ChorDanceviewComponent implements OnInit {
  events: DanceDetails[];
  choreographer: Choreographer;
  found: boolean=false;


  constructor(private service: ChoreographerServiceService, private userservice: UserService,private router: Router) {
    this.choreographer = new Choreographer();
   
   }

  ngOnInit() {
    if(this.userservice.choreographer.choreographerId == undefined){
      this.router.navigate(['login']);      
    }
   
  }

  findMyEvents(){
    if(this.userservice.choreographer.choreographerId != undefined){
    // this.found = true;
    this.choreographer = this.userservice.choreographer;
    this.service.findDanceDetails(this.choreographer.choreographerId).subscribe(data => {this.events = data;
    if(this.events.length > 0){
      this.found = true;
    }
    else
    {
      this.found = false;
      alert("No Events Found!!!");
      this.router.navigate(['chor-dashboard']);
    }
    });
     }
    //  else{
    //   this.found = false;
    //    alert("No Events Found!!!");
    //    this.router.navigate(['chor-dashboard']);
    //  }

  }

}
