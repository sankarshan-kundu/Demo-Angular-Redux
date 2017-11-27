import { Injectable } from "@angular/core";
import { dispatch } from "@angular-redux/store";
import { Action } from "redux";
import { FluxStandardAction } from 'flux-standard-action';

export type AccountAction = FluxStandardAction<any, any>;

@Injectable()
export class AccountActions {
    static readonly ACTION_ACCOUNT_LOGIN = "ACCOUNT_LOGIN";
    static readonly ACTION_ACCOUNT_LOGIN_SUCCESS = "ACCOUNT_LOGIN_SUCCESS";
    static readonly ACTION_ACCOUNT_LOGIN_ERROR = "ACCOUNT_LOGIN_ERROR";

    @dispatch()
    login = (): AccountAction => ({
        type: AccountActions.ACTION_ACCOUNT_LOGIN,
        meta: null,
        payload: null
    });

    loginSuccess = (): AccountAction => ({
        type: AccountActions.ACTION_ACCOUNT_LOGIN_SUCCESS,
        meta: null,
        payload: null
    });

    loginError = (): AccountAction => ({
        type: AccountActions.ACTION_ACCOUNT_LOGIN_ERROR,
        meta: null,
        payload: null
    });
}
