import React from 'react';
import Timer from 'Timer';
import {connect} from 'react-redux';
import {step, displayRandomGrid, startSimulation, pauseSimulation, resumeSimulation, clearSimulation} from 'actions';


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
				)
			}	
		}
		
		let renderControls = () => {
			switch(cells.simulationState) {
				case 'STOPPED':
					return (
						<span className="button-row">
							<button className="disabled-button" disabled>Step</button>	
							<button className="clear-button" onClick={(e) => {e.preventDefault(); dispatch(clearSimulation()); }}>Clear</button>	
							<button className="start-button" onClick={(e) => {e.preventDefault(); dispatch(startSimulation()); }}>Start</button>	
							<button className="normal-button" onClick={(e) => {e.preventDefault(); dispatch(displayRandomGrid(randomize())); }}>Randomize</button>	
						</span>
					)
				case 'RUNNING':
					return(
						<span className="button-row">
							<button className="disabled-button" disabled>Step</button>	
							<button className="disabled-button" disabled>Clear</button>	
							<button className="normal-button" onClick={(e) => {e.preventDefault(); dispatch(pauseSimulation()); }}>Pause</button>	
							<button className="disabled-button" disabled>Randomize</button>	
						</span>
					)
				case 'PAUSED':
					return (
						<span className="button-row">
							<button className="normal-button" onClick={(e) => {e.preventDefault(); dispatch(step()); }}>Step</button>	
							<button className="clear-button" onClick={(e) => {e.preventDefault(); dispatch(clearSimulation()); }}>Clear</button>	
							<button className="resume-button" onClick={(e) => {e.preventDefault(); dispatch(resumeSimulation()); }}>Resume</button>	
							<button className="normal-button" onClick={(e) => {e.preventDefault(); dispatch(displayRandomGrid(randomize())); }}>Randomize</button>	
						</span>
					)
			}	
		}
		
		return(
			<div className="control-panel">
				{renderControls()}
				{checkIfSimulationRunning()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return state;
}

export default connect(mapStateToProps)(ControlPanel);