import React from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const getTitle = (event) =>  {
            console.log(event.target.value)
        }
    

  return (
    <form className="expense-form-container">
      <label htmlFor='' className="expense-label">
        Expense title:
        <input type="text" name="title" id='title' className="expense-input" onChange={getTitle} />
      </label>
      <label htmlFor='amount' className="expense-label">
        Expense amount:
        <input type="text" name="amount" id='amount' className="expense-input" />
      </label>
      <label htmlFor='date' className="expense-label">
        Expense date:
        <input type="date" name="date" id='date' className="expense-input" />
      </label>
      <label htmlFor='location' className="expense-label">
        Location:
        <input type="text" name="location" id='location' className="expense-input" />
      </label>
      <button type="button" className="add-expense-button">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
