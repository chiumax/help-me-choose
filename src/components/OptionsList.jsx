import React from 'react';
import Option from './Option.jsx';

const OptionsList = props => {
	return (
		<div>
			<div className="widget-header">
				<h3 className="widget-header__title">Your Options</h3>
				<button
					onClick={props.handleRemoveAll}
					className="button button--link"
				>
					Remove All
				</button>
			</div>
			{props.op.length === 0 && (
				<p className="widget__message">Make sure to add an option!</p>
			)}
			{props.op.map((x, index) => (
				<Option
					key={x}
					optionText={x}
					count={index + 1}
					handleDeleteOption={props.handleDeleteOption}
				/>
			))}
		</div>
	);
};

export { OptionsList as default };
