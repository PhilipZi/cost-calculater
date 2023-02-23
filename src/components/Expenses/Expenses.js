/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, {useState} from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from '../ExpensesFilter.js/ExpensesFilter';

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2020');

	function filterChangeHandler(selectedYear){
		setFilteredYear(selectedYear);
	}

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	let expensesContent = <p>No Expenses Found.</p>;

	if(filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.length > 0 && 
		filteredExpenses.map((expense) => (
			<ExpenseItem 
				key={expense.id}
				title={expense.title} 
				amount={expense.amount} 
				date={expense.date}
			/>
		));
	}

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter 
					selected={filteredYear} 
					onChangeFilter={filterChangeHandler} 
				/>
				{expensesContent}
			</Card>
		</div>
	);
}

export default Expenses;