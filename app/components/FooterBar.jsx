import React from 'react';

class FooterBar extends React.Component {

	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div className="footerBar">
				<p>source code can be found on my <a href="https://github.com/coymeetsworld/fcc-game-of-life" target="_blank">Github page</a> - Coy Sanders © 2017</p>	
			</div>
		);
	}
}

export default FooterBar;