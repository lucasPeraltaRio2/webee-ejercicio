import { Action } from '@ngrx/store';


export const FETCH_USERS = '[USERS] FETCH_USERS';
export const FETCH_USERS_SUCCESS = '[USERS] FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAIL = '[USERS] FETCH_USERS_FAIL';

export class FetchUsersAction implements Action {
    readonly type = FETCH_USERS;
    constructor(public payload: any) {
    }
}
export class FetchUsersSuccessAction implements Action {
    readonly type = FETCH_USERS_SUCCESS;
    constructor(public payload: any) {
    }
}
export class FetchUsersFailAction implements Action {
    readonly type = FETCH_USERS_FAIL;
    constructor(public payload: any) {
    }
}

export type actionsUsers = FetchUsersAction | FetchUsersSuccessAction | FetchUsersFailAction;
