// Styles
import './_Demo.scss';
// React & Redux
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
// Actions
import * as DemoActions from '../../actions/demo-actions';

class DemoPage extends Component {
	render() {
		const {demoState, demoActions} = this.props;
		const loadingClassNames = classnames({
			hide: !demoState.isLoading
		});
		const counterClassNames = classnames({
			hide: demoState.isLoading
		});

		return (
			<section>
			    <button onClick={demoActions.increaseCounterLater}>later</button>
			    <button onClick={demoActions.increaseCounter}>+</button>
			    <span className={counterClassNames}>{demoState.counter}</span>
			    <span className={loadingClassNames}>Loading...</span>
			    <button onClick={demoActions.decreaseCounter}>-</button>
			</section>
		);
	}
}

DemoPage.propTypes = {
	demoState: PropTypes.object.isRequired,
	demoActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		demoState: state.demo.toJS()
	};
}

function mapDispatchToProps(dispatch) {
	return {
		demoActions: bindActionCreators(DemoActions, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DemoPage);
