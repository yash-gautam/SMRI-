import { AdminComponent } from './components/admin/admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverComponent } from './components/cover/cover/cover.component';
import { LoginComponent } from './components/login/login/login.component';
import { SurveyComponent } from './components/survey/survey/survey.component';
import { UserComponent } from './components/user/user/user.component';
import { SurveyPageComponent } from './components/surveypage/surveypage/surveypage.component';
import { AdminDashboardComponent } from './components/adminDashboard/admin-dashboard/admin-dashboard.component';
import { GraphComponent } from './components/graph/graph/graph.component';

const routes: Routes = [
  {path: "", component: CoverComponent},
  {path: "survey", component: SurveyComponent},
  {path: "surveyPage", component: SurveyPageComponent},
  {path: "admin", component: AdminComponent},
  {path: "user", component: UserComponent},
  {path: "login", component: LoginComponent},
  {path: "adminDashboard", component: AdminDashboardComponent},
  {path: "graph", component: GraphComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
