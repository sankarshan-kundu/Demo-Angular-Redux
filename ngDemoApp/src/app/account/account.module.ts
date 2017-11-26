import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ACC_ROUTES } from './account.routing';
import { ILoginState, INIT_LOGIN_STATE } from 'app/account/shared/account.model';
import { accountReducer } from 'app/account/shared/account.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { NgReduxFormModule } from '@angular-redux/form';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ACC_ROUTES),
    ReactiveFormsModule,
    NgReduxFormModule
  ],
  declarations: [LoginComponent]
})
export class AccountModule { }

