import React from 'react';
import {connect} from 'react-redux';
import {selectCell } from 'actions';

class Cell extends React.Component {
	
	
	render() {
		
		let {dispatch, x, y, cellClass} = this.props;
		return (
			<td key={'col'+y} className={cellClass} onClick={() => {dispatch(selectCell(x,y))}}></td>
		);
	}
}

const mapStateToProps = (state) => {
	return state;
}

export default connect(mapStateToProps)(Cell);