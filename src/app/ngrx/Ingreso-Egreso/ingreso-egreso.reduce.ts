import * as IE from './ingreso-egreso.actions';
import { IngresoEgreso } from '../../models/IngresoEgreso.model';

import { AppState } from '../app.reducer';

export interface State {
    ie: IngresoEgreso[];
}

export interface AppState extends AppState {
    ie: State;
}

const initialState: State = {
    ie: []
};

export function IngresoEgresoReducer(state = initialState, action: IE.actions): State {
    switch (action.type) {

        case IE.SET_INGRESO_EGRESO:
            return {
                ie: [
                    ...action.ingresoEgreso.map( item => {
                        return {...item};
                    })
                ]
            };
        case IE.UNSET_INGRESO_EGRESO:
            return {
                ie: []
            };

        default:
            return state;
    }
}
