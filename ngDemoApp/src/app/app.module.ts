import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routing';
import { NgReduxFormModule } from '@angular-redux/form';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { rootReducer, IAppState, INIT_STATE } from '@store/store';

import { environment } from 'environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //NgReduxFormModule,
    NgReduxModule,
    RouterModule.forRoot(APP_ROUTES, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension, ) {
    ngRedux.configureStore(rootReducer, INIT_STATE, [],
      !environment.production && devTools.isEnabled() ? [devTools.enhancer()] : []);
  }
}
