import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AccountsComponent } from './accounts.component';
const appRoutes: Routes = [
  {
    path: '',
    component: AccountsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]

})
export class AccountsRuteoModule {

}