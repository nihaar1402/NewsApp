import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { SportsComponent } from './sports/sports.component';
import { NewsComponent } from './news/news.component';
import { TechComponent } from './tech/tech.component';
import { ScienceComponent } from './science/science.component';
import { HealthComponent } from './health/health.component';
import { EntertainComponent } from './entertain/entertain.component';

const routes: Routes = [
  {path:'',component:NewsComponent},
 {path:'home',component:NewsComponent},
  {path:'business',component:BusinessComponent},
  {path:'sports',component:SportsComponent},
  {path:'tech',component:TechComponent},
  {path:'science',component:ScienceComponent},
  {path:'health',component:HealthComponent},
  {path:'entertain',component:EntertainComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
