import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AccountsComponent } from './accounts/accounts.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './modules/material.module';
import { RuteoModule } from './ruteo/ruteo.module';
import { DialogComponent } from './dialog/dialog.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiInterceptorService } from './services/api-interceptor.service';
import { ApiService } from './services/api-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RuteoModule,
    HttpClientModule
    
  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent],
  exports: [MaterialModule]
})
export class AppModule { }
