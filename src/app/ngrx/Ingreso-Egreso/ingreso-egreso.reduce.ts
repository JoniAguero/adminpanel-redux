import * as IE from './ingreso-egreso.actions';
import { IngresoEgreso } from '../../models/IngresoEgreso.model';

export interface State {
    ie: IngresoEgreso[];
}

const initialState: State = {
    ie: []
};

export function UserReducer(state = initialState, action: IE.actions): State {
    switch (action.type) {

        case IE.SET_INGRESO_EGRESO:
            return {
                ie: {
                    ...action.ingresoEgreso.map( item => {
                        return {...item};
                    })
                }
            };
        case IE.UNSET_INGRESO_EGRESO:
            return {
                ie: []
            };

        default:
            return state;
    }
}
