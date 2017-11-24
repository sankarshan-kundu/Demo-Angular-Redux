import { Component } from '@angular/core';
import { NgRedux, select, WithSubStore } from '@angular-redux/store';
import { IAppState } from '@store/store';
import { INCREMENT } from 'app/actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @select('counter') counter$:Observable<number>;

  constructor(private ngRedux: NgRedux<IAppState>) {

  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
