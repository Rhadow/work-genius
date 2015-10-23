// Styles
import './_Bugs-Table.scss';

// Libraries
import React, { Component, PropTypes } from 'react';

let TableHeaders = ({ data }) => {
	//console.log('data after sent in:', data);
	let headerHtml = Object.keys(data).map((header, index) => {
		return (
			<th key={index}>{header}</th>
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
	render () {
		const { data } = this.props;

		return (
			<div className="Bugs-Table">
			    <h5>Bugs by Person</h5>
			    <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
				    <TableHeaders data={data[0]} />
				    <TableBody data={data} />
				</table>
			</div>
		);
	}
}

BugsTable.propTypes = {
	data: PropTypes.array.isRequired
};

export default BugsTable;
