import React from 'react';
import {connect} from 'react-redux';
import {selectCell} from 'actions';

class Cell extends React.Component {
	
	
	render() {
		
		let {dispatch, x, y, isAlive} = this.props;
		
		return (
			<div className={isAlive ? 'live-cell': 'dead-cell'} onClick={() => {dispatch(selectCell(x,y))}}>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return state;
}

export default connect(mapStateToProps)(Cell);