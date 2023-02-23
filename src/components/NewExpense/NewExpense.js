import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { useState } from 'react';

function NewExpense (props) {
	const [isEditing, setIsEditing] = useState(false);

	function startEditingHandler() {
		setIsEditing(true);
	}

	function stopEditingHandler(){
		setIsEditing(false);
	}


	function saveExpenseDataHandler(enteredExpenseData) {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		};
		

		props.onAddExpense(expenseData);
		setIsEditing(false);

	}

	return<div className='new-expense'>
		{/* {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
		{isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>} */}
		{isEditing ? (
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>
		) : (
			<button onClick={startEditingHandler}>Add New Expense</button>
		) }
	</div>;
}

export default NewExpense;