import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthActions } from '@auth/auth.actions';
import { WithSubStore, PathSelector } from '@angular-redux/store';
import { authReducer } from '@auth/auth.reducer';

@WithSubStore({
  basePathMethodName: 'getBasePath',
  localReducer: authReducer
})
@Component({
  selector: 'demo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authActions: AuthActions
  ) { }

  ngOnInit() {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.authActions.login();
  }

  getBasePath(): PathSelector | null {
    return ['auth'];
  }
}
