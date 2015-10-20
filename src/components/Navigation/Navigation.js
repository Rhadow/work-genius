// Styles
import './_Navigation.scss';
// Libraries
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
	_onNavItemsClick(e) {
		const { onNavItemsClick } = this.props;
		let nameIndexCombo = e.target.name.split('-'),
		    name = nameIndexCombo[0],
		    index = nameIndexCombo[1];

		onNavItemsClick (name, index);
	}

	render() {
		const { headerText, navItems } = this.props;
		let navItemsHtml = navItems.map((item, index) => {
			return (
				<Link
				    to={item.link}
				    key={`navItem${index}`}
				    name={`${item.displayText}-${index}`}
				    onClick={this._onNavItemsClick.bind(this)}>
				    {item.displayText}
				</Link>
			);
		});

		return (
			<nav>
			    <header>
				    { headerText }
				</header>
				{ navItemsHtml }
			</nav>
		);
	}
}

Navigation.propTypes = {
	headerText: PropTypes.string.isRequired,
	navItems: PropTypes.array.isRequired,
	onNavItemsClick: PropTypes.func
};

Navigation.defaultProps = {
	onNavItemsClick: () => {}
};

export default Navigation;
