import React from 'react';
import Cell from 'Cell';
import { connect } from 'react-redux';

export class Grid extends React.Component {
	
	render() {	

		console.log("Grid rerender");
		var {cells} = this.props;
		//console.log(cells);
		
		let generateGrid = () => {
			
			let grid = [];
			
			for (let i = 0; i < cells.length; i++) {				
				let row = [];
				for (let j = 0; j < cells[i].length; j++) {
					row.push(<td key={'col'+j}><Cell x={i} y={j} key={i+''+j} isAlive={cells[i][j].alive} /></td>);	
				}			
				grid.push(<tr key={'row'+i}>{row}</tr>)
			}

			return grid;		
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