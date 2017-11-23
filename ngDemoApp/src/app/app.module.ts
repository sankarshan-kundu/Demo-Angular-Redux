import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routing';
import { AuthModule } from './auth/auth.module';
import { NgReduxFormModule } from '@angular-redux/form';
import { NgReduxModule } from '@angular-redux/store';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxFormModule,
    NgReduxModule,
    AuthModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
