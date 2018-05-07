import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../Button/Button.css";

class Login extends Component {
	render() {
		return (
			<form>
				<div className="form-group">
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
				</div>
				<div className="form-group">
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
				</div>
				<Link to="/Page2"><button type="submit" className="btn btn-primary">Submit</button></Link>
			</form>
		);
	}
}

export default Login;