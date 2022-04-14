import React from 'react';

const person = (props) => {
	return (
		<div>
			<p className="some">
				Hi! this is {props.name} and i am {props.age} years old
			</p>
			<div>Child : {props.children}</div>
		</div>
	);
};

export default person;
