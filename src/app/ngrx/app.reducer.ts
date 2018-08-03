import { ActionReducerMap } from '@ngrx/store';

import * as UI from './UI/ui.reducer';
import * as USER from './User/user.reduce';

export interface AppState {
    ui: UI.State;
    user: USER.State;
}

export const AppReducer: ActionReducerMap<AppState> = {
    ui: UI.UIReducer,
    user: USER.UserReducer
};
