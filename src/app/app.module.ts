import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './User/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppInitService } from './app-init.service';
import { RegisterUserComponent } from './User/register-user/register-user.component';

const startupServiceFactory = (appinit: AppInitService) => {
  console.debug("startupServiceFactory()");
  return() => appinit.getSettings();
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterUserComponent
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
