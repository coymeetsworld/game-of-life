import React from 'react';
import {connect} from 'react-redux';
import {step, randomize} from 'actions';


export class ControlPanel extends React.Component {
	
	render() {
		var { dispatch } = this.props;
		return(
			<div>
				<button onClick={(e) => {e.preventDefault(); dispatch(step()); }}>Step</button>	
				<button onClick={(e) => {e.preventDefault(); dispatch(randomize()); }}>Randomize</button>	
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return state;
}

export default connect(mapStateToProps)(ControlPanel);