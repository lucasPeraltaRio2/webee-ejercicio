import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpParams,
    HttpErrorResponse
  } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { Injectable } from '@angular/core';
  import { map, catchError } from 'rxjs/operators';
import { ApiService } from './api-service';
  
  
  @Injectable()
  export class ApiInterceptorService implements HttpInterceptor {
    constructor(public auth: ApiService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (localStorage.getItem('token') == null) {
        return next.handle(request).pipe(
          map((event: HttpEvent<any>) => {
            return event;
          }
          )
        );
      }
  
      const copiarequest = request.clone({
        setHeaders : {'Content-type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('tokenSpotify')}`}
      
        //params: new HttpParams().set('Bearer', this.auth.getToken()).set('Content-type','application/json')
      });
      return next.handle(copiarequest).pipe(
        map((event: HttpEvent<any>) => {
          return event;
        }
        )
      );
    }
  }