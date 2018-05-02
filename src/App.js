import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Page1 from './pages/Page1/Page1';

class App extends Component {
  render() {
    return (
		<Router>
			<div>
				<Route exact path="/" component={Home}/>
				<Route path="/page1" component={Page1}/>
			</div>
		</Router>
    );
  }
}

export default App;
