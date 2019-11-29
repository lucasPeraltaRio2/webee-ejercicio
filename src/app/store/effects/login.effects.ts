import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import { ApiService } from 'src/app/services/api-service';
import { catchError, switchMap, map } from 'rxjs/operators';
import {of} from 'rxjs';
import { LOGIN, LoginSuccessAction, LoginFailAction } from '../actions/login.actions';
@Injectable()
export class LoginEffects {
 constructor(public actions$: Actions, public apiService: ApiService) {}
 @Effect()
  initTransaccion = this.actions$.pipe(
    ofType(LOGIN),
    switchMap((action) => {
      return  this.apiService.login(action['payload']).pipe(
        map(response => {
            if (response) {
              return new LoginSuccessAction
              (response);
            }
          }
        ),
        catchError(error => {
          return of(new LoginFailAction(error.error.error)); }));
    }));
}
