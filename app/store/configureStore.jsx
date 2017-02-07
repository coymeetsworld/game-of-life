import { combineReducers, createStore, compose } from 'redux';
import { cellReducer, timerReducer } from 'reducers';
const GRID_DIMENSIONS = 50;

export var configure = () => {
	
	const reducer = combineReducers({
		cells: cellReducer
	});
	
	let defaultCells = new Array(GRID_DIMENSIONS);
	for (let i = 0; i < GRID_DIMENSIONS; i++) {
			defaultCells[i] = new Array(GRID_DIMENSIONS);
			for (let j = 0; j < GRID_DIMENSIONS; j++) {
				defaultCells[i][j] = {
					alive: Math.round(Math.random())
				}
			}
	}

	let initialState = { cells: {grid: defaultCells, simulationState: 'RUNNING', generation: 0 } };

	
	const store = createStore(reducer, initialState, compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));
	
	return store;
}