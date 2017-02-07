import React from 'react';
import {connect} from 'react-redux';
import {step} from 'actions';


export class Timer extends React.Component {
	
	componentDidMount() {
		this.timer = setInterval(() => {
			this.props.dispatch(step());
		}, 500);
	}
	

	componentDidUpdate() {
		let {dispatch, cells} = this.props;
		
		switch(cells.simulationState) {
			case 'PAUSED':
				clearInterval(this.timer);
				this.timer = undefined;					
				break;
			case 'RUNNING':
				if (!this.timer) {
					this.timer = setInterval(() => {
						dispatch(step());
					}, 500);
				}
				break;
		}
	}

	componentWillUnmount() {
		clearInterval(this.timer);
		this.timer = undefined;
	}

	render() {
		return(
				<span>Generation: {this.props.cells.generation}</span>	
		)
	}
}

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps)(Timer);