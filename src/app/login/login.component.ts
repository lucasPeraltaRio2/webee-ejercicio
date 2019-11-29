import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../shared/user';
import { ApiService } from '../services/api-service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/appReducers';
import { LoginAction } from '../store/actions/login.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  loading = false;
  loginDialog: MatDialogRef<DialogComponent>;
  loginSubscription = new Subscription();
  constructor(public apiService: ApiService, public dialog: MatDialog, private route: Router, private store: Store<AppState>) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      email: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      password: new FormControl(null, Validators.compose([Validators.required]))
    });
  }

  login() {
    this.loading = true;
    this.store.dispatch(new LoginAction(this.userForm.value));
    this.loginSubscription = this.store.select('login').subscribe(res => {
      this.loading = res.loading;
      if (res.loaded) {
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.route.navigate(['/accounts']);
        } else {
          this.loginDialog = this.dialog.open(DialogComponent);
          this.loginDialog.componentInstance.message = res.error;
        }
       this.loginSubscription.unsubscribe();
      }
    },
      error => {
        this.loading = false;
        this.loginDialog = this.dialog.open(DialogComponent);
        this.loginDialog.componentInstance.message = error.error.error
      });

  }

  ngOnDestroy() {
    this.loginSubscription.unsubscribe();
  }

}
