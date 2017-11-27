import { Injectable } from "@angular/core";
import { AccountEpics } from "app/account/shared/account.epics";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/ignoreElements';

@Injectable()
export class RootEpics {
    constructor(
        private accEpics: AccountEpics
    ) { }

    public createEpics() {
        return [
            ...this.accEpics.createActionEpics()
        ];
    }
}