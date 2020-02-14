import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/admin-service/admin-service.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private router: Router,private service: AdminServiceService) { }

  ngOnInit() {
  }

  logout(){
    if(sessionStorage.getItem("aduserName") != null){
      sessionStorage.removeItem("aduserName");
      this.router.navigate(['login']);

    }
  }

}
