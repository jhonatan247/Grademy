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

import { RegisterSpecialistComponent } from './components/register-specialist/register-specialist.component';
import { RegisterKidComponent } from './components/register-kid/register-kid.component';
import { RegisterParentComponent } from './components/parent/register-parent/register-parent.component';
import { HomeParentComponent } from './components/parent/home-parent/home-parent.component';

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
    HomeParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
