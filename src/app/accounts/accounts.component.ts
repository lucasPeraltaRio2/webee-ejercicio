import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service';
import { Store } from '@ngrx/store';
import { AppState } from '../store/appReducers';
import { FetchUsersAction } from '../store/actions/users.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  listaAccounts: Account[];
  accountsSubscription = new Subscription();
  columnas: string[] = ['avatar','email', 'first_name', 'last_name'];
  constructor(public apiService: ApiService, private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new FetchUsersAction({}));
    this.accountsSubscription = this.store.select('users').subscribe(res => {
      this.listaAccounts = res.listaAccounts;
    })
  }

  ngOnDestroy() {
    this.accountsSubscription.unsubscribe();
   }

}
