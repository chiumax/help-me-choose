import React from 'react';

import AddOption from './AddOption.jsx';
import OptionsList from './OptionsList.jsx';
import Header from './Header.jsx';
import Action from './Action.jsx';
import OptionModal from './OptionModal.jsx';

class HelpMeChooseApp extends React.Component {
	state = {
		options: [],
		error: undefined,
		selectedOption: undefined
	};
	handleRemoveAll = () => {
		this.setState(() => ({ options: [] }));
	};
	handlePick = () => {
		this.setState(() => ({
			selectedOption: this.state.options[
				Math.floor(Math.random() * this.state.options.length)
			]
		}));
	};
	handleDeleteOption = optionDel => {
		this.setState(state => ({
			options: state.options.filter(option => {
				return optionDel !== option;
			})
		}));
	};
	handleAddOption = e => {
		e.preventDefault();
		let sub = e.target.elements.submit.value.trim();
		if (!this.state.options.includes(sub) && sub) {
			e.target.elements.submit.value = '';
			this.setState(state => ({
				options: state.options.concat(sub),
				error: undefined
			}));
		} else if (!sub) {
			this.setState(state => ({ error: 'This value is not valid!' }));
		} else {
			this.setState(state => ({ error: 'This option already exists!' }));
		}
	};
	handleModalVis = () => {
		this.setState(() => ({ selectedOption: undefined }));
	};
	componentDidMount() {
		try {
			if (JSON.parse(localStorage.getItem('options'))) {
				this.setState(state => ({
					options: JSON.parse(localStorage.getItem('options'))
				}));
			}
		} catch (e) {}
	}
	componentDidUpdate(props, state) {
		if (state.options.length !== this.state.options.length) {
			let json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}

	render() {
		let subTitle =
			'Have a difficult decision to make? List your options below and let a computer decide for you!';
		return (
			<div>
				<Header subtitle={subTitle} />
				<div className="container">
					<Action
						opstate={this.state.options.length > 0}
						handlePick={this.handlePick}
					/>
					<div className="widget">
						<OptionsList
							op={this.state.options}
							handleRemoveAll={this.handleRemoveAll}
							handleDeleteOption={this.handleDeleteOption}
						/>
						<AddOption
							handleAddOption={this.handleAddOption}
							error={this.state.error}
						/>
					</div>
					<p className="option__textt">
						Made with {'<3'} by dumblole
					</p>
				</div>
				<OptionModal
					selectedOption={this.state.selectedOption}
					handleModalVis={this.handleModalVis}
				/>
			</div>
		);
	}
}

export { HelpMeChooseApp as default };
