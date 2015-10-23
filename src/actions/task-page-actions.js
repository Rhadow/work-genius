import * as actionTypes from '../constants/action-types';

export function addBugToTable(newBug) {
	return {
		type: actionTypes.ADD_BUG_TO_TABLE,
		newBug
	};
};
