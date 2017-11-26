import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";

export const ACC_ROUTES: Routes = [
    {
        path: 'account', children: [
            { path: 'login', component: LoginComponent }
        ]
    }
];