import {Action} from '@ngrx/store';


export const LOGIN = '[LOGIN] LOGIN';
export const LOGIN_SUCCESS = '[LOGIN] LOGIN_SUCCESS';
export const LOGIN_FAIL = '[LOGIN] LOGIN_FAIL';

export class LoginAction implements Action {
    readonly type = LOGIN;
    constructor (public payload: any) {
    }
  }
  export class LoginSuccessAction implements Action {
    readonly type = LOGIN_SUCCESS;
    constructor (public payload: any) {
    }
  }
  export class LoginFailAction implements Action {
    readonly type = LOGIN_FAIL;
    constructor (public payload: any) {
    }
  }

  export type actionsLogin = LoginAction | LoginSuccessAction | LoginFailAction;
