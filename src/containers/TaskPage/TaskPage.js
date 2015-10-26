// Style
import './_TaskPage';
// React & Redux
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import * as TaskPageActions from '../../actions/task-page-actions';
// Components
import BugsTable from '../../components/Bugs-Table/Bugs-Table';

class TaskPage extends Component {
	render() {
		const { bugsTableData, sortBy } = this.props.taskPageState;
		const { sortBugTableByCategory } = this.props.taskPageActions;

		return (
			<section>
			    <span>Task Page</span>
			    <BugsTable
			        data={bugsTableData}
			        enableSort
			        sortBy= {sortBy}
			        onSortHandler={sortBugTableByCategory} />
			</section>
		);
	}
}

TaskPage.propTypes = {
	taskPageState: PropTypes.object.isRequired,
	taskPageActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		taskPageState: state.task.toJS()
	};
}

function mapDispatchToProps(dispatch) {
	return {
		taskPageActions: bindActionCreators(TaskPageActions, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TaskPage);
