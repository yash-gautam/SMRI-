import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoverComponent } from './components/cover/cover/cover.component';
import { SurveyComponent } from './components/survey/survey/survey.component';
import { UserComponent } from './components/user/user/user.component';
import { LoginComponent } from './components/login/login/login.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { SurveyPageComponent } from './components/surveypage/surveypage/surveypage.component';
import { GraphComponent } from './components/graph/graph/graph.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { AdminDashboardComponent } from './components/adminDashboard/admin-dashboard/admin-dashboard.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    SurveyComponent,
    UserComponent,
    LoginComponent,
    AdminComponent,
    SurveyPageComponent,
    AdminDashboardComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    SlickCarouselModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
