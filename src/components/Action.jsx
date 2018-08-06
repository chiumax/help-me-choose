import React from 'react';

const Action = props => {
	return (
		<div>
			<button
				disabled={!props.opstate}
				onClick={props.handlePick}
				className={'huge-button'}
			>
				What should I do?
			</button>
		</div>
	);
};

export { Action as default };
