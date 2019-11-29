import {ActionReducerMap} from '@ngrx/store';
import { LoginState, loginreducer } from './reducers/login.reducers';

export interface AppState {
    login: LoginState;

}
export const appReducers: ActionReducerMap<AppState> = {
    login: loginreducer,

}