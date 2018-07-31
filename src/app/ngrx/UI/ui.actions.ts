import { Action } from '@ngrx/store';

export const LOADING = '[UI Loading] Loading ...';
export const NOT_LOADING = '[UI Loading] Finish ...';

export class LoadingUIAction implements Action {
    readonly type = LOADING;
}
export class NotLoadingUIAction implements Action {
    readonly type = NOT_LOADING;
}

export type actions = LoadingUIAction |
                      NotLoadingUIAction;
