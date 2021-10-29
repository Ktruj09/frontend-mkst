import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 //importamos modulos
 import { HomeComponent } from './components/home/home.component';
 import { RegisterComponent } from './components/register/register.component';
 import { LoginComponent } from './components/login/login.component';
 import { AboutComponent } from './components/about/about.component';
 import { ContactComponent } from './components/contact/contact.component';
 import { UserPublicationsComponent } from './components/user-publications/user-publications.component';
 import { EditUserComponent } from './components/edit-user/edit-user.component';
const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'about', component:AboutComponent, pathMatch:'full'},
  {path: 'register', component: RegisterComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'contact', component:ContactComponent, pathMatch:'full'},
  {path: 'profiles', component:UserPublicationsComponent, pathMatch:'full'},
  {path: 'editProfile', component:EditUserComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
