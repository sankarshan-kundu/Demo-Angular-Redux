import { Action } from "redux";
import { IAccountState, ILoginState, INIT_ACCOUNT_STATE } from "./account.model";
import { AccountActions } from "./account.actions";

export function accountReducer(state: IAccountState = INIT_ACCOUNT_STATE, action: Action): IAccountState {
    switch (action.type) {
        case AccountActions.ACTION_ACCOUNT_LOGIN_SUCCESS:
            return {
                ...state,
                isSubmitted: true,
                isValid: true
            }
        case AccountActions.ACTION_ACCOUNT_LOGIN_ERROR:
            return {
                ...state,
                isSubmitted: true,
                isValid: false
            }
        default: return state;
    }
}