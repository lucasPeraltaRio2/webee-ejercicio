import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRuteoModule } from '../login/login-ruteo.module';
import { LoginComponent } from '../login/login.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../services/api-service';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from '../dialog/dialog.component';



@NgModule({
  declarations: [LoginComponent, DialogComponent],
  imports: [
    CommonModule,
    LoginRuteoModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [DialogComponent],
  providers: []
})
export class LoginModule { }
