import { ActionReducerMap } from '@ngrx/store';

import * as UI from './UI/ui.reducer';
import * as USER from './User/user.reduce';
import * as IE from './Ingreso-Egreso/ingreso-egreso.reduce';

export interface AppState {
    ui: UI.State;
    user: USER.State;
    ie: IE.State;
}

export const AppReducer: ActionReducerMap<AppState> = {
    ui: UI.UIReducer,
    user: USER.UserReducer,
    ie: IE.UserReducer
};
