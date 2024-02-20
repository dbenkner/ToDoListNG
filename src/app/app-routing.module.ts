import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './User/login/login.component';
import { RegisterUserComponent } from 'src/app/User/register-user/register-user.component';

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
