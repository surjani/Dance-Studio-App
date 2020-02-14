import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/admin-service/admin-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
    if(sessionStorage.getItem("aduserName") == null){
      this.router.navigate(['login']);
    }
    
  }

}
