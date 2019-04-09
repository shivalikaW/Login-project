import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { HomepageComponent} from './homepage/homepage.component';
import {LoginComponent} from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MainComponent } from './main/main.component';
import { EditComponent } from "./edit/edit.component";
import { AddComponent } from './add/add.component';
import { from } from 'rxjs';
const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'Home',component:HomepageComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'main',component:MainComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'add',component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
