// Libraries
import { List, OrderedMap } from 'immutable';

export const FAKE_TASK_DATA = List.of(
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
	}),
	OrderedMap({
		'Developer': 'Dev 02',
		'Title': 'Some Bug 04',
		'PRI': 'P5',
		'Status': 'ASSIGNED',
		'Dev (%)': '7%',
		'QA (%)': '12%',
		'QA': 'QA 01',
		'Project': '4.1.0',
		'ETA': '2020'
	}),
	OrderedMap({
		'Developer': 'Dev 03',
		'Title': 'Some Bug 06',
		'PRI': 'P3',
		'Status': 'VERIFIED',
		'Dev (%)': '39%',
		'QA (%)': '52%',
		'QA': 'QA 04',
		'Project': '4.0.3',
		'ETA': '2010'
	}),
	OrderedMap({
		'Developer': 'Dev 01',
		'Title': 'Some Bug 05',
		'PRI': 'P3',
		'Status': 'NEW',
		'Dev (%)': '0%',
		'QA (%)': '14%',
		'QA': 'QA 05',
		'Project': '3.2.0',
		'ETA': '2015'
	})
);
