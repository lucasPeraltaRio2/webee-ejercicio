import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import { ApiService } from 'src/app/services/api-service';
import { catchError, switchMap, map } from 'rxjs/operators';
import {of} from 'rxjs';
import { FETCH_USERS, FetchUsersSuccessAction, FetchUsersFailAction } from '../actions/users.actions';
@Injectable()
export class UsersEffects {
 constructor(public actions$: Actions, public apiService: ApiService) {}
 @Effect()
  initTransaccion = this.actions$.pipe(
    ofType(FETCH_USERS),
    switchMap((action) => {
      return  this.apiService.getUsers().pipe(
        map(response => {
            if (response) {
              return new FetchUsersSuccessAction
              (response);
            }
          }
        ),
        catchError(error => {
          return of(new FetchUsersFailAction(error.error.error)); }));
    }));
}
