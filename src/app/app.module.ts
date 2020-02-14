import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { RegisterChorComponent } from './register-chor/register-chor.component';
import { HeaderComponent } from './header/header.component';
import { NaviRoutingModule } from './navi/navi-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AddStudentComponent } from './admin/add-student/add-student.component';
import { AddChoreographerComponent } from './admin/add-choreographer/add-choreographer.component';
import { DanceAddComponent } from './student/dance-add/dance-add.component';
import { NgModule } from '@angular/core';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { ChorDashboardComponent } from './choreographer/chor-dashboard/chor-dashboard.component';
import { AddedDanceComponent } from './student/added-dance/added-dance.component';
import { ChorDanceviewComponent } from './choreographer/chor-danceview/chor-danceview.component';
import { ChorSearchComponent } from './student/chor-search/chor-search.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchComponent } from './student/search/search.component';
import { StprofileComponent } from './student/stprofile/stprofile.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { ChorDetailsComponent } from './choreographer/chor-details/chor-details.component';
import { ChorHeaderComponent } from './choreographer/chor-header/chor-header.component';


 @NgModule({
   declarations: [
    AppComponent,
    LoginComponent,
    RegisterStudentComponent,
    RegisterChorComponent,
    HeaderComponent,
    AdminHomeComponent,
    AddStudentComponent,
    AddChoreographerComponent,
    DanceAddComponent,
    StudentDashboardComponent,
    ChorDashboardComponent,
    AddedDanceComponent,
    ChorDanceviewComponent,
    ChorSearchComponent,
    HomePageComponent,
    SearchComponent,
    StprofileComponent,
    AdminHeaderComponent,
    ChorDetailsComponent,
    ChorHeaderComponent    
  ],
  imports: [
    BrowserModule, FormsModule, NaviRoutingModule, HttpClientModule, CarouselModule.forRoot(), NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
