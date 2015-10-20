// Styles
import './_App.scss';
// React & Redux
import React, { Component } from 'react';
// Components
import Navigation from '../../components/Navigation/Navigation';

class App extends Component {
	render() {
		return (
			<section>
				<Navigation
				    headerText="Test Header"
				    navItems={[
				    	{displayText: 'Dashboard', link: '/'},
				    	{displayText: 'Task', link: '/task'},
				    	{displayText: 'PTO', link: '/pto'},
				    	{displayText: 'Redux Demo', link: '/redux-demo'},
				    ]}
				    onNavItemsClick={(name, index) => {console.log(name, index);}} />
				{this.props.children}
			</section>
		);
	}
}

export default App;
