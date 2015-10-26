import * as actionTypes from '../constants/action-types';

export function sortBugTableByCategory(category) {
	return {
		type: actionTypes.SORT_BUG_TABLE_BY_CATEGORY,
		category
	};
}