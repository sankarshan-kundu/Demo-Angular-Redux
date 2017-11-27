import { Injectable } from "@angular/core";
import { Epic, createEpicMiddleware, ActionsObservable, EpicMiddleware } from 'redux-observable';
import { AccountService } from "./account.service";
import { AccountActions, AccountAction } from "./account.actions";
import { ILoginState } from "./account.model";


import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import { IAppState } from "@store/store.model";

@Injectable()
export class AccountEpics {
    constructor(
        private service: AccountService,
        private actions: AccountActions
    ) { }

    public createActionEpics(): EpicMiddleware<AccountAction, any>[] {
        return [
            createEpicMiddleware(this.createLoginEpic())
        ];
    }

    public createLoginEpic(): Epic<AccountAction, any> {
        return (action$, store) => action$
            .ofType(AccountActions.ACTION_ACCOUNT_LOGIN)
            .switchMap(() => {
                let loginState: ILoginState = store.getState().account.formPayload;
                return this.service.checkLogin(loginState)
                    .map(result => result ? this.actions.loginSuccess() : this.actions.loginError())
                    .catch(error => of(this.actions.loginError()))
            });

    }
}
