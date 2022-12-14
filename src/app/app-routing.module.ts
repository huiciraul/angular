import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntroComponent } from './intro/intro.component';


const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'', redirectTo:'/intro', pathMatch:'full'},
  {path:'intro', component:IntroComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
