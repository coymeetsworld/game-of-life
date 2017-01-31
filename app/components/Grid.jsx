import React from 'react';
import { connect } from 'react-redux';

const GRID_DIMENSIONS = 10;

export class Grid extends React.Component {
	

	
	render() {
		let generateGrid = () => {
			
			let grid = [];
			
			for (var i = 0; i < GRID_DIMENSIONS; i++) {				
				let row = [];
				for (let j = 0; j < GRID_DIMENSIONS; j++) {
				row.push(<td key={'col'+j}></td>);	
				}			
				grid.push(<tr key={'row'+i}>{row}</tr>)
			}

			console.log(grid);
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