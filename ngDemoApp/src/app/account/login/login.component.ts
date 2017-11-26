import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ILoginState } from 'app/account/shared/account.model';
import { ACTION_ACCOUNT_LOGIN } from 'app/account/shared/account.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'demo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @select(['account']) loginState$;

  loginForm: FormGroup;

  constructor(
    private ngRedux: NgRedux<ILoginState>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [],
      password: []
    });
  }

  login() {
    this.ngRedux.dispatch({ type: ACTION_ACCOUNT_LOGIN });
  }
}
