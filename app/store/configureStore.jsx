import { combineReducers, createStore, compose } from 'redux';
import { cellReducer, timerReducer } from 'reducers';
const GRID_DIMENSIONS = 30;

export var configure = () => {
	
	const reducer = combineReducers({
		cells: cellReducer
	});
	
	let defaultCells = new Array(GRID_DIMENSIONS);
	for (let i = 0; i < GRID_DIMENSIONS; i++) {
			defaultCells[i] = new Array(GRID_DIMENSIONS);
			for (let j = 0; j < GRID_DIMENSIONS; j++) {
				defaultCells[i][j] = {
					alive : false
				}
			}
	}

	
	let initialState = { cells: {grid: defaultCells, simulationState: 'STOPPED', generation: 0 } };

	
	const store = createStore(reducer, initialState, compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));
	
	return store;
}