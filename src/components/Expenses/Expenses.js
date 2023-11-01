import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from './ExpensesList'
// import App from "../../App";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  console.log(filteredExpenses);
  // console.log(props.items)

  return (
    <div>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses} onDelete={props.onDelete} />
    </div>
  );
};

export default Expenses;

{
  /* {filteredExpenses.length === 0 && <p>No expense found</p>}
{filteredExpenses.length > 0 &&
  filteredExpenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      ExpenseTitle={expense.title}
      ExpenseAmount={expense.amount}
      ExpenseDate={expense.date}
      locationOfExpenditure={expense.location}
      onDelete={() => props.onDelete(expense.id)}
    />
  ))} */
}
