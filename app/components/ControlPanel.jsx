import React from 'react';
import Timer from 'Timer';
import {connect} from 'react-redux';
import {step, displayRandomGrid, startSimulation, pauseSimulation, resumeSimulation} from 'actions';


export class ControlPanel extends React.Component {
	
	render() {
		
		var { dispatch, cells } = this.props;
		
		let randomize = () => {					
			let {cells} = this.props;
			return cells.grid.map((col) => {
				return col.map((row) => {						
					return {
						alive: Math.round(Math.random())
					}
				});		
			});
		}
		

		let checkIfSimulationRunning = () => {
			if (cells.simulationState !== 'STOPPED') {
				return (
					<Timer/>
					//<Timer runningState={cells.simulationState} generation={cells.generation} timer={cells.timer}/>
				)
			}	
		}
		
		return(
			<div>
				<button onClick={(e) => {e.preventDefault(); dispatch(step()); }}>Step</button>	
				<button onClick={(e) => {e.preventDefault(); dispatch(displayRandomGrid(randomize())); }}>Randomize</button>	
				<button onClick={(e) => {e.preventDefault(); dispatch(startSimulation()); }}>Start</button>	
				<button onClick={(e) => {e.preventDefault(); dispatch(pauseSimulation()); }}>Pause</button>	
				<button onClick={(e) => {e.preventDefault(); dispatch(resumeSimulation()); }}>Resume</button>	
				{checkIfSimulationRunning()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return state;
}

export default connect(mapStateToProps)(ControlPanel);