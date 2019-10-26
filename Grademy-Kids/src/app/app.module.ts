import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule }   from '@angular/forms';

import { RegisterSpecialistComponent } from './components/specialist/register-specialist/register-specialist.component';
import { RegisterKidComponent } from './components/register-kid/register-kid.component';
import { RegisterParentComponent } from './components/parent/register-parent/register-parent.component';
import { HomeParentComponent } from './components/parent/home-parent/home-parent.component';
import { ReportComponent } from './components/parent/report/report.component';
import { HomeSpecialistComponent } from './components/specialist/home-specialist/home-specialist.component';
import { LoginSpecialistComponent } from './components/specialist/login-specialist/login-specialist.component';
import { LoginParentComponent } from './components/parent/login-parent/login-parent.component';
import { HomeKidsComponent } from './components/home-kids/home-kids.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    CategoriesComponent,
    NavbarComponent,
    RegisterComponent,
    RegisterSpecialistComponent,
    RegisterKidComponent,
    RegisterParentComponent,
    HomeParentComponent,
    ReportComponent,
    HomeSpecialistComponent,
    LoginSpecialistComponent,
    LoginParentComponent,
    HomeKidsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
