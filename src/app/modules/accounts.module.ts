import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from '../accounts/accounts.component';
import { AccountsRuteoModule } from '../accounts/accounts-ruteo.module';
import { MaterialModule } from './material.module';
import { AccountComponent } from '../accounts/account/account.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AccountsComponent, AccountComponent],
  imports: [
    CommonModule,
    AccountsRuteoModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [AccountComponent]
})
export class AccountsModule { }
