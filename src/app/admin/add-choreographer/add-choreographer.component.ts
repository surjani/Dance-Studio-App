import { Component, OnInit } from '@angular/core';
import { Choreographer } from '../../model/choreographer.model';
import { AdminServiceService } from '../../admin-service/admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-choreographer',
  templateUrl: './add-choreographer.component.html',
  styleUrls: ['./add-choreographer.component.css']
})
export class AddChoreographerComponent implements OnInit {

  choreographer: Choreographer;
  choreographers: Choreographer[];
  //choreographerId: number;

  constructor(private service: AdminServiceService, private  route: Router) { 
    this.choreographer =  new Choreographer();
  }

  ngOnInit() {
    if(sessionStorage.getItem("aduserName") != null){  //for string checking condition is 'null'
    this.service.listChoreographers().subscribe(data => {this.choreographers = data;});
    }
    // else{
    //   this.route.navigate(['login']);
    // }
  }

  choreographerApproval(choreographerId: number){
    this.service.addChoreographer(choreographerId).subscribe(data => { this.choreographer = data});
    // this.choreographer =  new Choreographer();

  }

}
