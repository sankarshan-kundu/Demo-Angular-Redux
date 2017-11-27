import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountActions } from 'app/account/shared/account.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'demo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @select(['account']) accountState$;

  loginForm: FormGroup;

  constructor(
    private accActions: AccountActions,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  signIn() {
    if (this.loginForm.valid) {
      this.accActions.login();
    }
  }
}
