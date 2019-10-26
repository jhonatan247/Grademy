import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterKidComponent } from './components/register-kid/register-kid.component';
import { RegisterParentComponent } from './components/register-parent/register-parent.component';
import { RegisterSpecialistComponent } from './components/register-specialist/register-specialist.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'kid', component: RegisterKidComponent, outlet: 'proyectList'},
  {path: 'parent', component: RegisterParentComponent, outlet: 'proyectList'},
  {path: 'specialist', component: RegisterSpecialistComponent, outlet: 'proyectList'},
 
  {path: 'profile', component: ProfileComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home',  },
  { path: '**', pathMatch: 'full', redirectTo: 'home',}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
