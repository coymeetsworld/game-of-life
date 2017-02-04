import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import App from './app';

//import Perf from 'react-addons-perf';
//window.Perf = Perf;

let store = require('configureStore').configure();

require('style!css!sass!applicationStyles');

render(
	<Provider store={store}>
		<App/>	
	</Provider>,
	document.getElementById('root')
);
