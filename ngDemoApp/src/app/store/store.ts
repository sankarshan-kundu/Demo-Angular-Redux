import { INCREMENT } from 'app/actions'
import { AnyAction } from 'redux';

export interface IAppState {
    counter: number;
}

export const INIT_STATE: IAppState = {
    counter: 0
}

export function rootReducer(state: IAppState = INIT_STATE, action: AnyAction): IAppState {
    switch (action.type) {
        case INCREMENT:
            return { counter: state.counter + 1 };
        default: return state;
    }
}