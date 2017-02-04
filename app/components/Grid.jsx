import React from 'react';
import Cell from 'Cell';
import { connect } from 'react-redux';
import { selectCell } from 'actions';

export class Grid extends React.Component {
	
	render() {	

		var {dispatch, cells} = this.props;
		
		let generateGrid = () => {
			return cells.map((row, rIndex) => {
				let r = row.map((col, cIndex) => {						
					return <Cell x={cIndex} y={rIndex} key={cIndex+''+rIndex} cellClass={cells[cIndex][rIndex].alive ? 'live-cell' : 'dead-cell'}/>
				});
				return <tr key={'row'+rIndex}>{r}</tr>	
			});
		}
	
		return (
			<div className="grid-section">
				<table className="grid">
					<tbody>
						{generateGrid()}
					</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return state;
}


export default connect(mapStateToProps)(Grid);