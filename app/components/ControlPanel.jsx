import React from 'react';
import Timer from 'Timer';
import {connect} from 'react-redux';
import {step, randomize, startSimulation, pauseSimulation, resumeSimulation} from 'actions';


export class ControlPanel extends React.Component {
	
	
	
	render() {
		var { dispatch, cells } = this.props;

		let checkIfSimulationRunning = () => {
		//console.log("CELLS");
		//console.log(cells);
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
				<button onClick={(e) => {e.preventDefault(); dispatch(randomize()); }}>Randomize</button>	
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