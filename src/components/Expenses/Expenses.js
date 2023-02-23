/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, {useState} from 'react';

import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter.js/ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2020');

	function filterChangeHandler(selectedYear){
		setFilteredYear(selectedYear);
	}

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	
	

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter 
					selected={filteredYear} 
					onChangeFilter={filterChangeHandler} 
				/>
				<ExpensesList items={filteredExpenses}/>
			</Card>
		</div>
	);
}

export default Expenses;