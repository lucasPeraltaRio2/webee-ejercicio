import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api-service';
import { MatDialogRef } from '@angular/material';
import { Accounts } from 'src/app/shared/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(public apiService: ApiService, public accountDialog: MatDialogRef<AccountComponent>) { }
  accountForm: FormGroup;
  modo: string= 'A';
  account: Accounts;
  tituloPopUp: string;
  ngOnInit() {
    if(this.modo == 'A') {
        this.formAlta();
        this.tituloPopUp= 'Agregar Cuenta';
    }else{
      this.formModificacion(this.account);
      this.tituloPopUp= 'Modificar Cuenta';
    }
   
  }

  aceptar(){
   this.apiService.createAccount(this.accountForm.value).subscribe(res => {
      console.log(res);
      this.accountDialog.close(res);
   })
  }

  close() {
    this.accountDialog.close();
  }

  formAlta(){
    this.accountForm = new FormGroup({
      email: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      first_name: new FormControl(null, Validators.compose([Validators.required])),
      last_name: new FormControl(null, null),
      avatar: new FormControl(null, null)
    });

  }
   
  formModificacion(account: Accounts){
    this.accountForm = new FormGroup({
      email: new FormControl(account.email, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      first_name: new FormControl(account.first_name, Validators.compose([Validators.required])),
      last_name: new FormControl(account.last_name, null),
      avatar: new FormControl(account.avatar, null)
    });

  }

}
