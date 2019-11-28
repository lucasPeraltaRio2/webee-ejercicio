import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';
import { User } from '../shared/user';
@Injectable()
export class ApiService {
    constructor(private httpC: HttpClient) { }

    public login(user: any): any {
        //const headers = new HttpHeaders({'Content-type':'application/json'});
        const urlServicio = environment.urlApi+'/login';
        const params = user;
        return this.httpC.post<any>(urlServicio, params, {})
          .pipe(map(
            response => {
              return response;
            }));
      }

      public getUsers(): any {
        const urlServicio = environment.urlApi+'/users?page=2';
        return this.httpC.get<any>(urlServicio, {})
          .pipe(map(
            response => {
              return response;
            }));
      }

}