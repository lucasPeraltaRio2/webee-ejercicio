import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  listaAccounts: Account[];
  columnas: string[] = ['avatar','email', 'first_name', 'last_name'];
  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUsers().subscribe(res => {
      console.log(res);
      this.listaAccounts = res.data;
    })
  }

}
