import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './User/login/login.component';
import { RegisterUserComponent } from 'src/app/User/register-user/register-user.component';
import { ListToDosByIdComponent } from './todos/list-to-dos-by-id/list-to-dos-by-id.component';

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterUserComponent},
  {path: 'listbyuid', component:ListToDosByIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
