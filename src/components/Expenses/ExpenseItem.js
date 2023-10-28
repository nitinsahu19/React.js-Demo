import "./ExpenseItem.css";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  const {
    ExpenseTitle,
    ExpenseAmount,
    ExpenseDate,
    locationOfExpenditure,
    onDelete,
  } = props;
  
  return (
    <div className="expense-item">
      <h3>{ExpenseTitle}</h3>
      <p>Amount: {ExpenseAmount}</p>
      <p>Date: {ExpenseDate.toDateString()}</p>
      <p>Location: {locationOfExpenditure}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default ExpenseItem;

// <Card className="expense-item">
//   <ExpenseDate ExpenseDate={props.ExpenseDate} />
//   <ExpenseDetails
//     ExpenseTitle={props.ExpenseTitle}
//     ExpenseAmount={props.ExpenseAmount}
//     locationOfExpenditure={props.locationOfExpenditure}
//   />
//   <button onClick={handleDeleteClick}>DELETE</button>
// </Card>

// const Delete = () => {
//   const filteredExpenses = props.expenses.filter(
//     (expense) => expense.title !== props.id
//   );
//   setExpenses(filteredExpenses);
// };

// import ExpenseDate from "./ExpenseDate";
// import ExpenseDetails from "./ExpenseDetails";
// import Card from "../UI/Card";