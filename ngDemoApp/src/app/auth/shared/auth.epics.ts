import { Injectable } from "@angular/core";
import { AuthActions } from "@auth/auth.actions";


@Injectable()
export class AuthEpics{
constructor(
    private actions: AuthActions
){}
}