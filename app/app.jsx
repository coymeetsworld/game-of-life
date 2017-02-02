import React from 'react';
import Grid from 'Grid';
import FooterBar from 'FooterBar';
import ControlPanel from 'ControlPanel';

const App = () => (
	<div>
		<h1>Game of Life</h1>	
		<ControlPanel/>
		<Grid/>
		<FooterBar/>
	</div>
)

export default App;