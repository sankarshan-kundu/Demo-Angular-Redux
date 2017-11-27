import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routing';
//import { NgReduxFormModule } from '@angular-redux/form';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import { environment } from 'environments/environment';
import { AccountModule } from 'app/account/account.module';
import { NgReduxRouterModule } from '@angular-redux/router';
import { StoreModule } from '@store/store.module';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //NgReduxFormModule,
    NgReduxModule,
    NgReduxRouterModule,
    RouterModule.forRoot(APP_ROUTES, {}),
    AccountModule,
    StoreModule,
    HttpModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
