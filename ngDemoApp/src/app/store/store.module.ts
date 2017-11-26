import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgRedux, DevToolsExtension, NgReduxModule } from '@angular-redux/store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { IAppState } from '@store/store.model';
import { rootReducer } from '@store/store.reducer';
import { provideReduxForms } from '@angular-redux/form';

@NgModule({
  imports: [],
  declarations: []
})
export class StoreModule {
  constructor(
    ngRedux: NgRedux<IAppState>,
    devTools: DevToolsExtension,
    ngReduxRouter: NgReduxRouter
  ) {
    ngRedux.configureStore(
      rootReducer,
      {},
      [],
      devTools.isEnabled() ? [devTools.enhancer()] : []);

    /*if (ngReduxRouter) {
      ngReduxRouter.initialize();
    }*/

    provideReduxForms(ngRedux);
  }
}
