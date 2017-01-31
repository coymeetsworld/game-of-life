import { combineReducers, createStore, compose } from 'redux';
import { cellReducer } from 'reducers';

export var configure = () => {
	
	const reducer = combineReducers({
		cells: cellReducer
	});
	
	
	const store = createStore(reducer, compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));
	
	return store;
}