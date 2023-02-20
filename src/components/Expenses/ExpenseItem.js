/* eslint-disable react/prop-types */
import React, {useState} from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css';

function ExpenseItem (props) {
	// eslint-disable-next-line no-unused-vars
	const [title, setTitle] = useState(props.title);

	function clickHandler() {
		setTitle('Updated!');
		console.log(title);
		
	}

	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2>{title}</h2>
				<div className='expense-item__price'>${props.amount}</div>
				<button onClick={clickHandler}>Change Title</button>
			</div>
		</Card>
	);
}

export default ExpenseItem;
