import { Injectable } from "@angular/core";
import { NgRedux } from "@angular-redux/store";

export interface LoginState{

}

@Injectable()
export class AuthActions{
    static LOGIN = 'auth/login::LOGIN';
    static LOGIN_SUCCESS = 'auth/login::LOGIN_SUCCESS';
    static LOGIN_ERROR = 'auth/login::LOGIN_ERROR';
    
    constructor(
        private ngRedux:NgRedux<LoginState>
    ){}

    login(){
        this.ngRedux.dispatch({
            type: AuthActions.LOGIN
        });
    }
}