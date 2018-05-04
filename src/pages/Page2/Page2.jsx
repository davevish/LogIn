import React, { Component } from 'react';
import "./Page2.css";
import Input from "../../components/Input";
import Button from "../../components/Button";

class Page2 extends Component {
	render() {
		return (
			<div className="container" style={{marginTop: 100 + 'px'}}>
				<div className="row">
					<div className="container col-sm-5">
						<Input/>
						<Button/>
					</div>
				</div>
			</div>
		)
	}
}

export default Page2