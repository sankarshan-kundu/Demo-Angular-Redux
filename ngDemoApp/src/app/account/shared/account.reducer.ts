import { ILoginState, INIT_LOGIN_STATE } from "./account.model";
import { Action } from "redux";
import { ACTION_ACCOUNT_LOGIN } from "app/account/shared/account.actions";

export function accountReducer(state: ILoginState = INIT_LOGIN_STATE, action: Action): ILoginState {
    switch (action.type) {
        case ACTION_ACCOUNT_LOGIN:
            let isValid = state.login.email == "sk@msn.com" && state.login.password == "abc123";
            return {
                ...state,
                isSubmitted: true,
                isValid: isValid
            }
        default: return state;
    }
}