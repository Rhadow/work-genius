// Styles
import './_App.scss';
// React & Redux
import React, { Component } from 'react';
// Components
import Navigation from '../../components/Navigation/Navigation';

class App extends Component {
	componentDidUpdate() {
		/* eslint-disable */
		/* component handler is used by Material Design Lite, every react component
		   needs to upgrade its DOM in order to maintain the effect.
		*/
		componentHandler.upgradeDom();
		/* eslint-enable */
	}

	render() {
		return (
			// The outer-most <div> is used by Material Design Lite to prevent DOM clash with React
			<div>
				<section className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
					<Navigation
					    headerTitle="WG"
					    navItems={[
					    	{displayText: 'Dashboard', link: '/'},
					    	{displayText: 'Task', link: '/task'},
					    	{displayText: 'PTO', link: '/pto'},
					    	{displayText: 'Redux Demo', link: '/redux-demo'},
					    ]}
					    hasLogo
					    onNavItemsClick={(name, index) => {console.log(name, index);}} />
					<main className="mdl-layout__content">
					    <div className="page-content">
							{this.props.children}
					    </div>
					</main>
				</section>
			</div>
		);
	}
}

export default App;
