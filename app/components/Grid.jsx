import React from 'react';
import Cell from 'Cell';
import { connect } from 'react-redux';
import { selectCell } from 'actions';

export class Grid extends React.Component {
	
	
	render() {	

		let {dispatch, cells} = this.props;
		
		let generateGrid = () => {
			let x = cells.grid.map((row, rIndex) => {
				let r = row.map((col, cIndex) => {						
					return <Cell x={cIndex} y={rIndex} key={cIndex+''+rIndex} cellClass={cells.grid[cIndex][rIndex].alive ? 'live-cell' : 'dead-cell'}/>
				});
				return <tr key={'row'+rIndex}>{r}</tr>	
			});
			return x;
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