import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Test extends Component {
	render() {
		return (
			<div className="app">
			    <nav className="app__nav">
			        <Link className="app_nav-item" to="/">Dashboard</Link>
			        <Link className="app_nav-item" to="/pto">PTO</Link>
			        <Link className="app_nav-item" to="/activity">Activity</Link>
			    </nav>
			    <main className="app__content">
			        {this.props.children}
			    </main>
			</div>
		);
	}
}