import { actionsLogin, LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/login.actions';
export interface LoginState {
    token: string;
    loaded: boolean;
    loading: boolean;
    error: string;
}
const estadoInicial: LoginState = {
    token: null,
    loaded: false,
    loading: false,
    error: null
}
export function loginreducer(state = estadoInicial, action: actionsLogin): LoginState {
    switch ((action.type)) {
        case LOGIN:
            return {
                ...state,
                loading: true,
                loaded: false,
            };
        case LOGIN_SUCCESS:
            let retorno: LoginState;
            retorno = {
                ...retorno,
                token: action.payload,
                loaded: true,
                loading: false
            };
            return retorno;
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                loaded: true,
                error: action.payload.error.error.error
            };
        default: return state;

    }
}