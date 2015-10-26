// Styles
import './_Bugs-Table.scss';

// Libraries
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

let FilterIcons = ({ sortBy, onSortHandler, header, enableSort }) => {
	const buttonClassNames = classnames('mdl-button mdl-js-button mdl-button--icon', {
		'mdl-button--colored': sortBy === header
	});
	let filterIconHtml = (<div></div>);

	if (enableSort) {
		filterIconHtml = (
			<button
		        className={buttonClassNames}
		        data-name={header}
		        onClick={onSortHandler}>
			    <i className="material-icons" data-name={header}>sort</i>
			</button>
		);
	}

	return filterIconHtml;
};

let TableHeaders = ({ data, onSortHandler, sortBy, enableSort }) => {
	let headerHtml = Object.keys(data).map((header, index) => {
		return (
			<th key={index}>
			    {header}
			    <FilterIcons
			        sortBy={sortBy}
			        onSortHandler={onSortHandler}
			        header={header}
			        enableSort={enableSort} />
			</th>
		);
	});
	return (
		<thead>
		    <tr>
		        {headerHtml}
		    </tr>
		</thead>
	);
};

let TableBody = ({ data }) => {
	const bodyHtml = data.map((bug, bodyIndex) => {
		const cellHtml = Object.keys(data[0]).map((key, cellIndex) => {
			return (
				<td key={cellIndex}>{bug[key]}</td>
			);
		});
		return (
			<tr key={bodyIndex}>
			    {cellHtml}
			</tr>
		);
	});
	return (
		<tbody>
		    {bodyHtml}
		</tbody>
	);
};

class BugsTable extends Component {
	_onSortHandler(e) {
		const {
			onSortHandler,
		} = this.props;
		const category = e.target.dataset.name;

		onSortHandler(category);
	}

	render () {
		const { data, sortBy, enableSort } = this.props;

		return (
			<div className="Bugs-Table">
			    <h5>Bugs by Person</h5>
			    <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
				    <TableHeaders
				        data={data[0]}
				        onSortHandler={this._onSortHandler.bind(this)}
				        enableSort={enableSort}
				        sortBy={ sortBy } />
				    <TableBody data={data} />
				</table>
			</div>
		);
	}
}

BugsTable.propTypes = {
	data: PropTypes.array.isRequired,
	enableSort: PropTypes.bool,
	sortBy: PropTypes.string,
	onSortHandler: PropTypes.func
};

BugsTable.defaultProps = {
	enableSort: false,
	sortBy: '',
	onSortHandler: () => {}
};

export default BugsTable;
