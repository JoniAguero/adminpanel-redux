import * as USER from './user.actions';
import { User } from '../../models/User.model';

export interface State {
    user: User;
}

const initialState: State = {
    user: null
};

export function UserReducer(state = initialState, action: USER.actions): State {
    switch (action.type) {

        case USER.SET_USER:
            return { user: { ...action.user } };

        case USER.UNSET_USER:
            return { user: null };

        default:
            return state;
    }
}
