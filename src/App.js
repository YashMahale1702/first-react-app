import React, { Component } from 'react';
import './App.scss';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [ { name: 'Yash', age: 26 }, { name: 'Rahul', age: 12 } ]
	};

	switchNameHandler = () => {
		// console.log('was clicked.');
		this.setState({
			persons: [ { name: 'Yash Mahale', age: 27 }, { name: 'Rahul bhat', age: 18 } ]
		});
	};

	render() {
		return (
			<div className="App">
				<button onClick={this.switchNameHandler} className="App-btn">
					Switch Name
				</button>
				<Person name={this.state.persons[0]['name']} age={this.state.persons[0]['age']}>
					Children component goes here
				</Person>
				<Person name={this.state.persons[1]['name']} age={this.state.persons[1]['age']} />
			</div>
		);
	}
}

export default App;
