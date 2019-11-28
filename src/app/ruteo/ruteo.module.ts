import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: '../modules/login.module#LoginModule'
  },
  {
    path: 'accounts',
    loadChildren: '../modules/accounts.module#AccountsModule'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class RuteoModule { }
