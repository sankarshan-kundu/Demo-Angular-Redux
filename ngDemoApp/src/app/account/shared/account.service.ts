import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { ILoginState } from "./account.model";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operator/map";
import { of } from 'rxjs/observable/of';

@Injectable()
export class AccountService {
    constructor(
        private http: Http
    ) { }

    checkLogin = (loginState: ILoginState): Observable<boolean> =>
        this.http.get('assets/data/login.json')
            .map(data => {
                let loginData: ILoginState = data.json();
                return loginData.email === loginState.email && loginData.password === loginState.password;
            })
            .catch(error => of(false));

}