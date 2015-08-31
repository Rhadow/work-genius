import React from 'react';
import { Route } from 'react-router';

// Pages
import App from '../components/App/App';
import Dashboard from '../pages/Dashboard/Dashboard';
import PTO from '../pages/PTO/PTO';
import Activity from '../pages/Activity/Activity';

export default (
	<Route component={App}>
	    <Route path="/" component={Dashboard} />
	    <Route path="/pto" component={PTO} />
	    <Route path="/activity" component={Activity} />
	</Route>
);
