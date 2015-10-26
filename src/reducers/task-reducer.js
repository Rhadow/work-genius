// Libraries
import { Map, List, OrderedMap } from 'immutable';
// Constants
import * as actionTypes from '../constants/action-types';

const initialState = Map({
	bugsTableOriginalData: List.of(
		OrderedMap({
			'Developer': 'Dev 01',
			'Title': 'Some Bug 02',
			'PRI': 'P5',
			'Status': 'ASSIGNED',
			'Dev (%)': '89%',
			'QA (%)': '52%',
			'QA': 'QA 01',
			'Project': '4.1.0',
			'ETA': '2020'
		}),
		OrderedMap({
			'Developer': 'Dev 02',
			'Title': 'Some Bug 03',
			'PRI': 'P1',
			'Status': 'NEW',
			'Dev (%)': '29%',
			'QA (%)': '10%',
			'QA': 'QA 04',
			'Project': '4.0.3',
			'ETA': '2010'
		}),
		OrderedMap({
			'Developer': 'Dev 01',
			'Title': 'Some Bug 01',
			'PRI': 'P3',
			'Status': 'VERIFIED',
			'Dev (%)': '100%',
			'QA (%)': '90%',
			'QA': 'QA 03',
			'Project': '3.2.0',
			'ETA': '2015'
		})
	),
	bugsTableData: List.of(
		OrderedMap({
			'Developer': 'Dev 01',
			'Title': 'Some Bug 02',
			'PRI': 'P5',
			'Status': 'ASSIGNED',
			'Dev (%)': '89%',
			'QA (%)': '52%',
			'QA': 'QA 01',
			'Project': '4.1.0',
			'ETA': '2020'
		}),
		OrderedMap({
			'Developer': 'Dev 02',
			'Title': 'Some Bug 03',
			'PRI': 'P1',
			'Status': 'NEW',
			'Dev (%)': '29%',
			'QA (%)': '10%',
			'QA': 'QA 04',
			'Project': '4.0.3',
			'ETA': '2010'
		}),
		OrderedMap({
			'Developer': 'Dev 01',
			'Title': 'Some Bug 01',
			'PRI': 'P3',
			'Status': 'VERIFIED',
			'Dev (%)': '100%',
			'QA (%)': '90%',
			'QA': 'QA 03',
			'Project': '3.2.0',
			'ETA': '2015'
		})
	),
	sortBy: ''
});


function sortAlphaNum(a,b) {
	let reA = /[^a-zA-Z]/g;
	let reN = /[^0-9]/g;
    let aA = a.replace(reA, '');
    let bA = b.replace(reA, '');

    if (aA === bA) {
        let aN = parseInt(a.replace(reN, ''), 10);
        let bN = parseInt(b.replace(reN, ''), 10);
        return aN === bN ? 0 : aN > bN ? 1 : -1;
    }

    return aA > bA ? 1 : -1;
}

export default function taskReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.SORT_BUG_TABLE_BY_CATEGORY:
			let nextState,
			    category = state.get('sortBy');

			if (category === action.category) {
				nextState = state.set('sortBy', '');
			} else {
				nextState = state.set('sortBy', action.category);
			}

			category = nextState.get('sortBy');

			if (category) {
				nextState = nextState.update('bugsTableData', (data) => {
					return data.sort((curr, next) => {
						return sortAlphaNum(curr.get(category), next.get(category));
					});
				});
			} else {
				nextState = nextState.update('bugsTableData', () => {
					return state.get('bugsTableOriginalData');
				});
			}
			return nextState;
		default:
			return state;
	}
};
