import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterChorComponent } from '../register-chor/register-chor.component';
import { RegisterStudentComponent } from '../register-student/register-student.component';
import { DanceAddComponent } from '../student/dance-add/dance-add.component';
import { AdminHomeComponent } from '../admin/admin-home/admin-home.component';
import { StudentDashboardComponent } from '../student/student-dashboard/student-dashboard.component';
import { AddChoreographerComponent } from '../admin/add-choreographer/add-choreographer.component';
import { AddStudentComponent } from '../admin/add-student/add-student.component';
import { ChorDashboardComponent } from '../choreographer/chor-dashboard/chor-dashboard.component';
import { AddedDanceComponent } from '../student/added-dance/added-dance.component';
import { ChorDanceviewComponent } from '../choreographer/chor-danceview/chor-danceview.component';
import { ChorSearchComponent } from '../student/chor-search/chor-search.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { StprofileComponent } from '../student/stprofile/stprofile.component';
import { ChorDetailsComponent } from '../choreographer/chor-details/chor-details.component';


const routes: Routes = [
  {path:'',redirectTo:'/home-page',pathMatch:'full'},
  {path:'home-page',component:HomePageComponent},
  {path:'login',component:LoginComponent},
  {path:'register-chor',component:RegisterChorComponent},
  {path:'register-student',component:RegisterStudentComponent},
  {path:'dance-add',component:DanceAddComponent},
  {path:'student-dashboard',component:StudentDashboardComponent},
  {path:'admin-home',component:AdminHomeComponent},
  {path:'add-chor',component:AddChoreographerComponent},
  {path:'add-student',component:AddStudentComponent},
  {path:'chor-dashboard',component:ChorDashboardComponent},
  {path:'added-dance',component:AddedDanceComponent},
  {path:'chor-danceview',component:ChorDanceviewComponent},
  {path:'chor-search', component:ChorSearchComponent},
  {path:'stprofile', component:StprofileComponent},
  {path:'chor-details',component:ChorDetailsComponent},
  {path:'**',redirectTo:'/home-page',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NaviRoutingModule { }
