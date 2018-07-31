import * as UI from './ui.actions';

export interface State {
    isLoading: boolean;
}

const initialState: State = {
    isLoading: false
};

export function todoReducer(state = initialState, action: UI.actions): State {
    switch (action.type) {

        case UI.LOADING:
            return {
                isLoading: true
            };
        case UI.NOT_LOADING:
            return {
                isLoading: false
            };

        default:
            return state;
    }
}
