import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from '../accounts/accounts.component';
import { AccountsRuteoModule } from '../accounts/accounts-ruteo.module';



@NgModule({
  declarations: [AccountsComponent],
  imports: [
    CommonModule,
    AccountsRuteoModule
  ]
})
export class AccountsModule { }
