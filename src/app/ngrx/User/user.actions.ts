import { Action } from '@ngrx/store';
import { User } from '../../models/User.model';

export const SET_USER = '[SET USER] Set ...';
export const UNSET_USER = '[UNSET USER] Unset ...';

export class SetUserAction implements Action {
    readonly type = SET_USER;

    constructor(public user: User) {}

}

export class UnsetUserAction implements Action {
    readonly type = UNSET_USER;

}

export type actions = SetUserAction | UnsetUserAction;
