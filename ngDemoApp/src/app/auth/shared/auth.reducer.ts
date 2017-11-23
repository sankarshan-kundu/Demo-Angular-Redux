import { AnyAction } from "redux";
import { AuthActions } from "@auth/auth.actions";


export interface State {

}

export const initState: State = {

}

export function authReducer(state = initState, action: AnyAction): State {
    switch (action.type) {
        case AuthActions.LOGIN:
            return {
                ...initState
            };
        case AuthActions.LOGIN_SUCCESS:
            return {
                ...state
            };
        case AuthActions.LOGIN_ERROR:
            return {
                ...state
            };
        default:
            return state;
    }
}