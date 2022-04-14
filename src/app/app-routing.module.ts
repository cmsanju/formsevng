import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';

const routes: Routes = [
  {path:'home-page', component: HomeComponent},
  {path:'login-page', component:LoginpageComponent},
  {path:'sign-up', component:SignuppageComponent},
  {path:'', redirectTo:'/home-page', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
