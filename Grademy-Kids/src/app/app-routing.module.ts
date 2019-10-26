import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterKidComponent } from './components/register-kid/register-kid.component';
import { RegisterParentComponent } from './components/parent/register-parent/register-parent.component';
import { RegisterSpecialistComponent } from './components/register-specialist/register-specialist.component';
import { HomeParentComponent } from './components/parent/home-parent/home-parent.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'home-parent', component: HomeParentComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'register-kid', component: RegisterKidComponent },
  {path: 'register-parent', component: RegisterParentComponent},
  {path: 'register-specialist', component: RegisterSpecialistComponent},
  {path: 'profile', component: ProfileComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home',  },
  { path: '**', pathMatch: 'full', redirectTo: 'home',}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
