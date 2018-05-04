import React, { Component } from 'react';
import "./Input.css";

class Input extends Component {

	constructor(props){
		super(props);

		this.state ={
			tasks: []
		};

		this.addTask = this.addTask.bind(this);
	}

	addTask(e) {
		if (this._inputElement.value !== "") {
			let newTask = {
				text: this._inputElement.value,
				key: Date.now()
			};

			this.setState((prevState) => {
				return{
					tasks: prevState.tasks.concat(newTask)
				};
			});
		}

		this._inputElement.value = "";

		console.log(this.state.tasks);

		e.preventDefault();
	}

	render() {
		return (
			<div>
				<form onSubmit={this.addTask}>
					<input ref={(a) => this._inputElement = a} type="text" className="form-control" placeholder="Enter New Task"/>
				</form>
			</div>
		);
	}
}

export default Input;



