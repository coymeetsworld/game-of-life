
export const willDie = (state, cellX, cellY) => {
	let neighbors = 0;
	
	if (cellX > 0 && cellY > 0 && state[cellX-1][cellY-1].alive) { neighbors++; }
	if (cellX > 0 && state[cellX-1][cellY].alive) { neighbors++; }
	if (cellX > 0 && cellY < state.length-1 && state[cellX-1][cellY+1].alive) { neighbors++; }
	if (cellX === 3 && cellY === 1) { console.log ("Neigh 1: " + neighbors); }
	
	if (cellY > 0 && state[cellX][cellY-1].alive) { neighbors++; }
	if (cellY < state.length-1 && state[cellX][cellY+1].alive) { neighbors++; }
	if (cellX === 3 && cellY === 1) { console.log ("Neigh 2: " + neighbors); }

	if (cellX < state.length-1 && cellY > 0 && state[cellX+1][cellY-1].alive) { neighbors++; }
	if (cellX < state.length-1 && state[cellX+1][cellY].alive) { neighbors++; }
	if (cellX < state.length-1 && cellY < state.length-1 && state[cellX+1][cellY+1].alive) { neighbors++; }
	if (cellX === 3 && cellY === 1) { console.log ("Neigh 3: " + neighbors); }

	/* Check if isolated, or overcrowded */	
	if (neighbors < 2 || neighbors > 3) {
		//console.log(`${cellX},${cellY} has ${neighbors} neighbors, will die`);
		return true;
	}
	//console.log(`${cellX},${cellY} has ${neighbors} neighbors, won't die`);
	return false;
}

export const willReproduce = (state, cellX, cellY) => {
	let neighbors = 0;
	
	if (cellX > 0 && cellY > 0 && state[cellX-1][cellY-1].alive) { neighbors++; }
	if (cellX > 0 && state[cellX-1][cellY].alive) { neighbors++; }
	if (cellX > 0 && cellY < state.length-1 && state[cellX-1][cellY+1].alive) { neighbors++; }
	
	if (cellY > 0 && state[cellX][cellY-1].alive) { neighbors++; }
	if (cellY < state.length-1 && state[cellX][cellY+1].alive) { neighbors++; }

	if (cellX < state.length-1 && cellY > 0 && state[cellX+1][cellY-1].alive) { neighbors++; }
	if (cellX < state.length-1 && state[cellX+1][cellY].alive) { neighbors++; }
	if (cellX < state.length-1 && cellY < state.length-1 && state[cellX+1][cellY+1].alive) { neighbors++; }

	/* A dead cell with exactly 3 living neighbors will become living. */	
	if (neighbors === 3) {
		return true;
	}
	return false;
}



export const cellReducer = (state = {}, action) => {
	
	switch (action.type) {
		
		case 'STEP':
			return state.map((col, colIndex) => {						
				return col.map((row, rowIndex) => {
					if (state[colIndex][rowIndex].alive) {
						if (willDie(state, colIndex, rowIndex)) {
							return {
								alive: false
							};
						} else {
							return row;
						}

					} else {
						if (willReproduce(state, colIndex, rowIndex)) {
							return {
								alive: true
							};
						} else {
							return row;
						}
						
					}
				});
			});
			
			
			

		case 'SELECT_CELL':
			return state.map((col, colIndex) => {
				if (colIndex !== action.cellX) { return col; }	
				return col.map((row, rowIndex) => {
					if (rowIndex === action.cellY) {
						return {
							alive: !state[colIndex][rowIndex].alive /* toggle value */
						};
					}	
					return row;
				});
			});
			
		default:
			return state;	
	}
}