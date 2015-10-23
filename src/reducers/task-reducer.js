// Libraries
import { Map, List, OrderedMap } from 'immutable';
// Constants
import * as actionTypes from '../constants/action-types';

const initialState = Map({
	bugsTableData: List.of(
		OrderedMap({
			'Developer': 'Dev 01',
			'Title': 'Some Bug 01',
			'PRI': 'P1',
			'Status': 'ASSIGNED',
			'Dev (%)': '89%',
			'QA (%)': '52%',
			'QA': 'QA 01',
			'Project': '4.1.0',
			'ETA': '2020'
		}),
		OrderedMap({
			'Developer': 'Dev 01',
			'Title': 'Some Bug 02',
			'PRI': 'P3',
			'Status': 'NEW',
			'Dev (%)': '29%',
			'QA (%)': '10%',
			'QA': 'QA 04',
			'Project': '4.0.3',
			'ETA': '2010'
		}),
		OrderedMap({
			'Developer': 'Dev 01',
			'Title': 'Some Bug 03',
			'PRI': 'P5',
			'Status': 'VERIFIED',
			'Dev (%)': '100%',
			'QA (%)': '90%',
			'QA': 'QA 03',
			'Project': '3.2.0',
			'ETA': '2015'
		})
	)
});

export default function taskReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.ADD_BUG_TO_TABLE:
		    return state.update('bugsTableData', (bugsTableData) => {
		    	return bugsTableData.push(OrderedMap(action.newBug));
		    });
		default:
			return state;
	}
};
