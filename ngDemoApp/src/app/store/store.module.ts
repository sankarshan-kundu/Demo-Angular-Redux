import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgRedux, DevToolsExtension, NgReduxModule } from '@angular-redux/store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { IAppState } from '@store/store.model';
import { rootReducer } from '@store/store.reducer';
import { provideReduxForms } from '@angular-redux/form';
import { createLogger } from 'redux-logger';
import { RootEpics } from '@store/store.epics';
import { createEpicMiddleware } from 'redux-observable';

@NgModule({
  imports: [],
  declarations: [],
  providers:[RootEpics]
})
export class StoreModule {
  constructor(
    ngRedux: NgRedux<IAppState>,
    devTools: DevToolsExtension,
    ngReduxRouter: NgReduxRouter,
    rootEpics: RootEpics    
  ) {
    ngRedux.configureStore(
      rootReducer,
      {},
      [createLogger(), ...rootEpics.createEpics()],
      devTools.isEnabled() ? [devTools.enhancer()] : []);

    /*if (ngReduxRouter) {
      ngReduxRouter.initialize();
    }*/

    provideReduxForms(ngRedux);
  }
}
