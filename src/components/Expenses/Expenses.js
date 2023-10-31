import React, { Component } from "react";
import ExpenseItem from "./ExpenseItem";
import App from "../../App";

const Expenses = (props) => {
  return props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      ExpenseTitle={expense.title}
      ExpenseAmount={expense.amount}
      ExpenseDate={expense.date}
      locationOfExpenditure={expense.location}
      onDelete={() => props.onDelete(expense.id)}
    />
  ));
};

export default Expenses;
