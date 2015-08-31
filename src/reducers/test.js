import { List } from 'immutable';
import {
	PLACE_HOLDER
} from '../constants/ActionTypes.js';

const defaultState = new List();

export default function(state = defaultState, action) {
    switch (action.type) {
        case PLACE_HOLDER:
            return state.concat(action.text);
        default:
            return state;
    }
};
