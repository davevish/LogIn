import React, { Component } from 'react';
import "./Page2.css";
import Input from "../../components/Input";
import Button from "../../components/Button";

class Page2 extends Component {
	render() {
		return (
			<div className="container col-sm-12" style={{marginTop: 100 + 'px'}}>
				<div className="container row">
					<div className="col-sm-4">
						<Input/>
						<Input/>
						<Input/>
					</div>
					<div className="col-sm-4">
						<Input/>
						<Input/>
						<Input/>
					</div>
				</div>

				<Button/>

			</div>
		)
	}
}

export default Page2