
export const willDie = (state, cellX, cellY) => {
	let neighbors = 0;
	
	if (cellX > 0 && cellY > 0 && state[cellX-1][cellY-1].alive) { neighbors++; }
	if (cellX > 0 && state[cellX-1][cellY].alive) { neighbors++; }
	if (cellX > 0 && cellY < state.length-1 && state[cellX-1][cellY+1].alive) { neighbors++; }
	
	if (cellY > 0 && state[cellX][cellY-1].alive) { neighbors++; }
	if (cellY < state.length-1 && state[cellX][cellY+1].alive) { neighbors++; }

	if (cellX < state.length-1 && cellY > 0 && state[cellX+1][cellY-1].alive) { neighbors++; }
	if (cellX < state.length-1 && state[cellX+1][cellY].alive) { neighbors++; }
	if (cellX < state.length-1 && cellY < state.length-1 && state[cellX+1][cellY+1].alive) { neighbors++; }

	// Check if isolated, or overcrowded
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

	// A dead cell with exactly 3 living neighbors will become living.
	if (neighbors === 3) {
		return true;
	}
	return false;
}


export const step = (state) => {
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
}

let grid;
export const cellReducer = (state = {}, action) => {
	
	switch (action.type) {
		case 'STEP':
			return {
				grid: step(state.grid),
				simulationState: state.simulationState,
				generation: state.generation + 1,
			}

		case 'RANDOMIZE':			
			grid = state.grid.map((col) => {
				return col.map((row) => {						
					return {
						alive: Math.round(Math.random())
					}
				});	
			});
			return {
				grid,
				simulationState: 'STOPPED',
				generation: 0,
			}

		case 'SELECT_CELL':
			grid = state.grid.map((col, colIndex) => {
				if (colIndex !== action.cellX) { return col; }	
				return col.map((row, rowIndex) => {
					if (rowIndex === action.cellY) {
						return {
							alive: !state.grid[colIndex][rowIndex].alive
						};
					}	
					return row;
				});
			});
			
			return {
				grid,
				simulationState: 'PAUSED',
				generation: state.generation,
			}
			
			
		case 'START_SIMULATION':
			console.log("Start simulation");
			
			return {
				grid: state.grid,
				simulationState: 'RUNNING',
				generation: state.generation,
			};
			
		case 'PAUSE_SIMULATION':
			console.log("Pausing simulation");
			
			return {
				grid: state.grid,
				simulationState: 'PAUSED',
				generation: state.generation,
			};
			
		case 'RESUME_SIMULATION':
			console.log("Resuming simulation");
			console.log(state);
			
			return {
				grid: state.grid,
				simulationState: 'RUNNING',
				generation: state.generation,
			};

		default:
			return state;	
	}
}