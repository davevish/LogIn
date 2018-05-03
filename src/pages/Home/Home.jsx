import React, { Component } from 'react';
import Button from '../../components/Button.jsx';
import "./Home.css";

class Home extends Component {
	render() {
		return (
			<div className="row container" style={{marginTop: 65 + 'px'}}>
				<div className="container">
					<Button/>
				</div>
			</div>
		)
	}
}

export default Home