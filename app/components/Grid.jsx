import React from 'react';
import Cell from 'Cell';
import { connect } from 'react-redux';
import { selectCell } from 'actions';

export class Grid extends React.Component {
	
	render() {	

		console.log("Grid rerender");
		var {dispatch, cells} = this.props;
		
		let generateGrid = () => {
			
			return cells.map((row, rIndex) => {

				let r = row.map((col, cIndex) => {						
					return <Cell x={rIndex} y={cIndex} key={rIndex+''+cIndex} cellClass={cells[rIndex][cIndex].alive ? 'live-cell' : 'dead-cell'}/>
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