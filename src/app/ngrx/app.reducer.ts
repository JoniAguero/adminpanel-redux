import { ActionReducerMap } from '@ngrx/store';
import * as UI from './UI/ui.reducer';

export interface AppState {
    ui: UI.State;
}

export const AppReducer: ActionReducerMap<AppState> = {
    ui: UI.UIReducer
};
