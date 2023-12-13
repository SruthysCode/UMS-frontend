import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/user/login/login.component';
import { RegisterComponent } from './component/user/register/register.component';
import { HomeComponent } from './component/user/home/home.component';
import { AdminloginComponent } from './component/admin/adminlogin/adminlogin.component';
import { AdminhomeComponent } from './component/admin/adminhome/adminhome.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'adminlogin', component:AdminloginComponent},
  {path:'adminhome', component:AdminhomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
