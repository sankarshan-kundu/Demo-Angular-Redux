import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AUTH_ROUTES } from './auth.routing';
import { NgReduxModule } from '@angular-redux/store';
import { NgReduxFormModule } from '@angular-redux/form';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthActions } from '@auth/auth.actions';
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule    
  ],
  declarations: [LoginComponent]
})
export class AuthModule { 
  static forRoot(): ModuleWithProviders{
    return {
      ngModule:RootAuthModule,
      providers:[
        AuthActions,
        
      ]
    };
  }
}


@NgModule({
imports:[
  AuthModule,
  RouterModule.forChild(AUTH_ROUTES)
]
})
export class RootAuthModule{
  constructor(){}
}
