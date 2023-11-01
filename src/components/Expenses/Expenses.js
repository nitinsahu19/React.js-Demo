import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
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

  let expensesContent = <p>No expenses found.</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        ExpenseTitle={expense.title}
        ExpenseAmount={expense.amount}
        ExpenseDate={expense.date}
        locationOfExpenditure={expense.location}
        onDelete={() => props.onDelete(expense.id)}
      />
    ));
    if (filteredExpenses.length === 1) {
      expensesContent = [
        ...expensesContent,
        <p>Only one expense left!! Kindly add more expenses.</p>,
      ];
    }
  }

  return (
    <div>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
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
