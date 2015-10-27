import * as actionTypes from '../constants/action-types';

export function sortBugTableByCategory(category) {
	return {
		type: actionTypes.SORT_BUG_TABLE_BY_CATEGORY,
		category
	};
}

export function filterBugTable(filterConditions) {
	return {
		type: actionTypes.FILTER_BUG_TABLE,
		filterConditions
	};
}

export function resetBugTable() {
	return {
		type: actionTypes.RESET_BUG_TABLE
	};
}