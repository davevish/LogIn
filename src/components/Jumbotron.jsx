import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import "./Jumbotron.css";

class Jumbotron extends Component {
	render() {
		return (
			<div className="container">
				<div className="jumbotron">
					<h1 className="display-4">Login below!</h1>
					<p className="lead">
						Testing Flux State
					</p>
				</div>
			</div>
		);
	}
}

export default Jumbotron;