import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from '../accounts/accounts.component';
import { AccountsRuteoModule } from '../accounts/accounts-ruteo.module';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [AccountsComponent],
  imports: [
    CommonModule,
    AccountsRuteoModule,
    MaterialModule
  ]
})
export class AccountsModule { }
