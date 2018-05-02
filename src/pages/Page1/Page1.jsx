import React, { Component } from 'react';
import Navbar from '../../components/Navbar.jsx';
import Jummbotron from '../../components/Jumbotron.jsx';
import "./Page1.css";
import Login from "../../components/Login";

class Page1 extends Component {
	render() {
		return (
			<div>
				<Navbar/>
				<Jummbotron/>
				<div className="container col-sm-4">
					<Login/>
				</div>
			</div>
		)
	}
}

export default Page1