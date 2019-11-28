import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';
import { User } from '../shared/user';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable()
export class ApiService {
    constructor(private httpC: HttpClient) { }
    estaLogueadoSubj = new BehaviorSubject<boolean>(this.tieneToken());
    usuarioSubj = new BehaviorSubject<string>(null);
    public login(user: any): any {
        //const headers = new HttpHeaders({'Content-type':'application/json'});
        const urlServicio = environment.urlApi+'/login';
        const params = user;
        return this.httpC.post<any>(urlServicio, params, {})
          .pipe(map(
            response => {
              this.estaLogueadoSubj.next(true);
              this.usuarioSubj.next(user.email);
              return response;
            }));
      }

      logout() : void {
        localStorage.removeItem('token');
        this.estaLogueadoSubj.next(false);
        this.usuarioSubj.next(null);
      }

      public getUsers(): any {
        const urlServicio = environment.urlApi+'/users';
        return this.httpC.get<any>(urlServicio, {})
          .pipe(map(
            response => {
              return response;
            }));
      }

      private tieneToken() : boolean {
        return !!localStorage.getItem('token');
      }

      public estaLogueado() : Observable<boolean> {
        return this.estaLogueadoSubj.asObservable();
       }

       public usuarioConectado() : Observable<string> {
        return this.usuarioSubj.asObservable();
       }
       

}