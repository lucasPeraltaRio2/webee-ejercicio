import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../shared/user';
import { ApiService } from '../services/api-service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  loginDialog: MatDialogRef<DialogComponent>;
  constructor(public apiService: ApiService, public dialog: MatDialog) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      email: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      password: new FormControl(null, Validators.compose([Validators.required]))
    });
  }

  login() {
    const user: User = this.userForm.value;
    this.apiService.login(this.userForm.value).subscribe(res => {
      console.log(res);
      
    },
    error => {
      this.loginDialog = this.dialog.open(DialogComponent);
      this.loginDialog.componentInstance.message = error.error.error});
   
  }

}
