import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service';
import { Store } from '@ngrx/store';
import { AppState } from '../store/appReducers';
import { FetchUsersAction } from '../store/actions/users.actions';
import { Subscription } from 'rxjs';
import { AccountComponent } from './account/account.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Accounts } from '../shared/account';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  listaAccounts: Accounts[];
  accountsSubscription = new Subscription();
  columnas: string[] = ['avatar', 'email', 'first_name', 'last_name'];
  constructor(public apiService: ApiService, private store: Store<AppState>, public dialog: MatDialog) { }
  loginDialog: MatDialogRef<AccountComponent>;
  ngOnInit() {
    this.store.dispatch(new FetchUsersAction({}));
    this.accountsSubscription = this.store.select('users').subscribe(res => {
      if(res){
      this.listaAccounts = res.listaAccounts;
      }
    })
  }

  agregar() {
    this.loginDialog = this.dialog.open(AccountComponent);
    this.loginDialog.componentInstance.modo = 'A';
    this.loginDialog.afterClosed().subscribe(
      data => {
        if (data) {
          this.listaAccounts.push(data)
        }
      }
    );
  }

  editar(account: Accounts, index: number) {
    this.loginDialog = this.dialog.open(AccountComponent);
    this.loginDialog.componentInstance.modo = 'M';
    this.loginDialog.componentInstance.account = account;
    this.loginDialog.afterClosed().subscribe(
      data => {
        if (data) {
          this.listaAccounts[index] =data;
        }
      }
    );
  }

  eliminar( index: number) {
    this.listaAccounts.splice(index, 1);
  }

  ngOnDestroy() {
    this.accountsSubscription.unsubscribe();
  }

}
