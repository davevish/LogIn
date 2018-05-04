import React, { Component } from 'react';
import Button from '../../components/Button.jsx';
import { Link } from 'react-router-dom';
import "./Home.css";

class Home extends Component {
	render() {
		return (
			<div style={{marginTop: 65 + 'px'}}>
				<div>
					<Link to="/Page1"><Button/></Link>
				</div>
			</div>
		)
	}
}

export default Home