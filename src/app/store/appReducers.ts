import {ActionReducerMap} from '@ngrx/store';
import { LoginState, loginreducer } from './reducers/login.reducers';
import { UsersState, usersreducer } from './reducers/users.reducers';

export interface AppState {
    login: LoginState;
    users: UsersState
}
export const appReducers: ActionReducerMap<AppState> = {
    login: loginreducer,
    users: usersreducer
}