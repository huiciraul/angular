import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { SkillsComponent } from './skills/skills.component';
import { CompetenciasComponent } from './competencias/competencias.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntroComponent } from './intro/intro.component';
import { NavbardashboardComponent } from './navbardashboard/navbardashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { RedesdashboardComponent } from './redesdashboard/redesdashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    PresentacionComponent,
    SkillsComponent,
    CompetenciasComponent,
    DashboardComponent,
    IntroComponent,
    NavbardashboardComponent,
    LogoutComponent,
    RedesdashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
