import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgReduxFormModule } from '@angular-redux/form';
import { ACC_ROUTES } from './account.routing';
import { LoginComponent } from './login/login.component';
import { accountReducer } from './shared/account.reducer';
import { AccountActions } from './shared/account.actions';
import { AccountService } from './shared/account.service';
import { AccountEpics } from './shared/account.epics';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ACC_ROUTES),
    ReactiveFormsModule,
    NgReduxFormModule
  ],
  declarations: [LoginComponent],
  providers:[
    AccountActions,
    AccountService,
    AccountEpics
  ]
})
export class AccountModule { }

