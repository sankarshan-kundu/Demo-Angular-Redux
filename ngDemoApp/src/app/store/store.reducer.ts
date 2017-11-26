import { combineReducers } from "redux";
import { routerReducer } from '@angular-redux/router';
import { accountReducer } from "app/account/shared/account.reducer";
import { composeReducers, defaultFormReducer } from "@angular-redux/form";

export const rootReducer = composeReducers( 
    defaultFormReducer(),
    combineReducers({
    //router: routerReducer,
    account: accountReducer
}));