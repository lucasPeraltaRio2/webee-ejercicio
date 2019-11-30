import { actionsUsers, FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL } from '../actions/users.actions';
import { Accounts } from 'src/app/shared/account';
export interface UsersState {
    listaAccounts: Accounts[];
    loaded: boolean;
    loading: boolean;
    error: string;
}
const estadoInicial: UsersState = {
    listaAccounts: [],
    loaded: false,
    loading: false,
    error: null
}
export function usersreducer(state = estadoInicial, action: actionsUsers): UsersState {
    switch ((action.type)) {
        case FETCH_USERS:
            return {
                ...state,
                loading: true,
                loaded: false,
            };
        case FETCH_USERS_SUCCESS:
            let retorno: UsersState;
            retorno = {
                ...retorno,
                listaAccounts: action.payload.data,
                loaded: true,
                loading: false
            };
            return retorno;
        case FETCH_USERS_FAIL:
            return {
                ...state,
                loading: false,
                loaded: true,
                listaAccounts: [],
                error: action.payload.error.error.error
            };
        default: return state;

    }
}