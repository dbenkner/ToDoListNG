import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './User/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppInitService } from './app-init.service';
import { RegisterUserComponent } from './User/register-user/register-user.component';
import { ListToDosByIdComponent } from './todos/list-to-dos-by-id/list-to-dos-by-id.component';
import { CompletePipe } from './core/complete.pipe';

const startupServiceFactory = (appinit: AppInitService) => {
  console.debug("startupServiceFactory()");
  return() => appinit.getSettings();
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterUserComponent,
    ListToDosByIdComponent,
    CompletePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppInitService, {
    provide:APP_INITIALIZER,
    useFactory:startupServiceFactory,
    deps: [AppInitService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
