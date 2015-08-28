import React, { Component, PropTypes } from 'react';

export default class Test2 extends Component {
	static propTypes = {
		test: PropTypes.string
	}
	render() {
		return (
			<div>Test 2</div>
		);
	}
}