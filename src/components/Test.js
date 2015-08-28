import React, { Component, PropTypes } from 'react';

export default class Test extends Component {
	static propTypes = {
		test: PropTypes.string
	}
	render() {
		return (
			<div>Test 1</div>
		);
	}
}