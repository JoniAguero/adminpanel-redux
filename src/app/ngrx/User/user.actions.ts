import { Action } from '@ngrx/store';
import { User } from '../../models/User.model';

export const SET_USER = '[SET USER] Set ...';

export class SetUserAction implements Action {
    readonly type = SET_USER;

    constructor(public user: User) {}

}

export type actions = SetUserAction;
