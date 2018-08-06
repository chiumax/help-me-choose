// const isAdult = x => {
// 	return x >= 18;
// };
// const canDrink = x => {
// 	return x >= 21;
// };
// export default x => {
// 	return x >= 65;
// };
// export { isAdult, canDrink };
// class Counter extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.handleAddOne = this.handleAddOne.bind(this);
// 		this.handleMinusOne = this.handleMinusOne.bind(this);
// 		this.handleReset = this.handleReset.bind(this);
// 		this.state = {
// 			count: 0
// 		};
// 	}
// 	componentDidMount() {
// 		try {
// 			if (JSON.parse(localStorage.getItem('count'))) {
// 				this.setState(() => ({
// 					count: JSON.parse(localStorage.getItem('count'))
// 				}));
// 			}
// 		} catch (e) {}
// 	}
//
// 	componentDidUpdate(props, state) {
// 		if (state.count !== this.state.count) {
// 			localStorage.setItem('count', JSON.stringify(this.state.count));
// 		}
// 	}
//
// 	handleAddOne() {
// 		this.setState(state => {
// 			return {
// 				count: state.count + 1
// 			};
// 		});
// 		console.log('handleAddOne');
// 	}
// 	handleMinusOne() {
// 		this.setState(state => {
// 			return {
// 				count: state.count - 1
// 			};
// 		});
// 		console.log('handleMinusOne');
// 	}
// 	handleReset() {
// 		this.setState(state => {
// 			return {
// 				count: 0
// 			};
// 		});
// 		console.log('handleReset');
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<h1>Count: {this.state.count}</h1>
// 				<button onClick={this.handleAddOne}>+1</button>
// 				<button onClick={this.handleMinusOne}>-1</button>
// 				<button onClick={this.handleReset}>reset</button>
// 			</div>
// 		);
// 	}
// }
//
// ReactDOM.render(<Counter />, document.getElementById('app'));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();

// 'use strict';
// console.log('Hello, fellow dev!');
//
// class Person {
// 	constructor(name = 'Anonymous', age = 0) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	getDescription() {
// 		return `${this.name} is ${this.age} years old`;
// 	}
// 	getGreeting() {
// 		return `Hi, I am ${this.name}.`;
// 	}
// }
//
// class Traveler extends Person {
// 	constructor(name, age, location) {
// 		super(name, age);
// 		this.location = location;
// 	}
// 	getGreeting() {
// 		let prefix = super.getGreeting();
// 		if (this.location) {
// 			prefix += ` I'm visiting from ${this.location}`;
// 		}
// 		return prefix;
// 	}
// }
//
// let me = new Traveler('Max Chiu', 15, 'Maryland');
// console.log(me.getDescription());
// //
// class App extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.visStatus = this.visStatus.bind(this);
// 		this.state = {
// 			visible: false
// 		};
// 	}
// 	visStatus(e) {
// 		e.preventDefault();
// 		this.setState(state => {
// 			return {
// 				visible: !state.visible
// 			};
// 		});
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<h1>Visibility Toggle</h1>
// 				<button onClick={this.visStatus}>
// 					{this.state.visible
// 						? 'Click me to make me invisible'
// 						: 'Click me to make me visible'}
// 				</button>
// 				{this.state.visible && <p>Now you see me...</p>}
// 			</div>
// 		);
// 	}
// }
// let visStatus = e => {
// 	e.preventDefault();
// 	visible = !visible;
// 	console.log(visible);
// 	render();
// };
// let checkVis = () => {
// 	if (visible) {
// 		return <p>Now you see me...</p>;
// 	}
// };
//
// const render = () => {
// 	const template = (
// 		<div>
// 			<h1>Visibility Toggle</h1>
// 			<button onClick={visStatus}>
// 				{visible
// 					? 'Click me to make me invisible'
// 					: 'Click me to make me visible'}
// 			</button>
// 			{checkVis()}
// 		</div>
// 	);
// 	const appRoot = document.getElementById('app');
// 	ReactDOM.render(template, appRoot);
// };
// render();
// ReactDOM.render(<App />, document.getElementById('app'));

// let main = {
// 	title: "I'm a loser",
// 	subtitle: 'Difficult decisions? Let a computer choose for you!',
// 	options: []
// };
//
// const onOptionSubmit = e => {
// 	e.preventDefault();
// 	const subOption = e.target.elements.optionSubmit.value;
// 	if (subOption) {
// 		main.options.push(' ' + subOption);
// 		e.target.elements.optionSubmit.value = '';
// 	}
// 	renderApp();
// };
// const removeOption = e => {
// 	e.preventDefault();
// 	main.options = [];
// 	renderApp();
// };
// const makeDecision = e => {
// 	e.preventDefault();
// 	let randNum = Math.floor(Math.random() * main.options.length);
// 	let chosenOp = main.options[randNum];
// 	alert(chosenOp);
// };
// const renderApp = () => {
// 	const template = (
// 		<div>
// 			<h1>{main.title}</h1>
// 			{main.subtitle && <p>{main.subtitle}</p>}
// 			<p>
// 				{main.options.length > 0
// 					? 'Here are your options: ' + main.options
// 					: 'No options currently available.'}
// 			</p>
// 			<ol>
// 				{main.options.map(x => {
// 					return <li key={x}>{x}</li>;
// 				})}
// 			</ol>
// 			<button disabled={main.options.length === 0} onClick={makeDecision}>
// 				Help me choose!
// 			</button>
// 			<form onSubmit={onOptionSubmit}>
// 				<input type="text" name="optionSubmit" />
// 				<button>Add Option</button>
// 			</form>
// 			<form onSubmit={removeOption}>
// 				<button>Remove All Options</button>
// 			</form>
// 		</div>
// 	);
// 	const appRoot = document.getElementById('app');
// 	ReactDOM.render(template, appRoot);
// };
// renderApp();

// babel src/app.js --out-file=scripts/app.js --presets=env,react --watch
// live-server

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// class Header extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>{this.props.title}</h1>
// 				<h2>{this.props.subtitle}</h2>
// 			</div>
// 		);
// 	}
// }

// class Action extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<button
// 					disabled={!this.props.opstate}
// 					onClick={this.props.handlePick}
// 				>
// 					What should I do?
// 				</button>
// 			</div>
// 		);
// 	}
// }

// class OptionsList extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<button onClick={this.props.handleRemoveAll}>Remove All</button>
// 				<p>OptionsList Component Here</p>
// 				{console.log(this.props.op)}
// 				{this.props.op.map(x => <Option key={x} optionText={x} />)}
// 			</div>
// 		);
// 	}
// }

// class Option extends React.Component {
// 	render() {
// 		return <div>{this.props.optionText}</div>;
// 	}
// }

// class AddOption extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				{console.log(this.props.error)}
// 				{this.props.error && <p>{this.props.error}</p>}
// 				<form onSubmit={this.props.handleAddOption}>
// 					<input type="text" name="submit" />
// 					<button>Submit</button>
// 				</form>
// 			</div>
// 		);
// 	}
// }
//////////////////////////////////////////////////////////
