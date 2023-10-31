import React, { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
// import ExpenseDate from "./components/Expenses/ExpenseDate";
import NewExpense from "./components/Expenses/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      title: "Toilet paper",
      amount: 98.23,
      date: new Date(2023, 7, 14),
      location: "Jaipur",
      id: 1,
    },
    {
      title: "Car Insurance",
      amount: 323.32,
      date: new Date(2023, 4, 13),
      location: "Sawai-Madhopur",
      id: 2,
    },
    {
      title: "New TV",
      amount: 3432.33,
      date: new Date(2023, 9, 4),
      location: "Ajmer",
      id: 3,
    },
    {
      title: "Cycle",
      amount: 5500,
      date: new Date(2023, 11, 9),
      location: "Tonk",
      id: 4,
    },
    {
      title: "Speaker",
      amount: 2550,
      date: new Date(2023, 11, 8),
      location: "Shivdaspura",
      id: 5,
    },
  ]);

  const addEventHandler = (expense) => {
    // console.log("In App.js");
    // console.log(expense);
    const newArr = [expense, ...expenses];
    setExpenses(newArr);
    console.log(newArr);
  };

  const deleteExpenseHandler = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <Expenses items={expenses} onDelete={deleteExpenseHandler} />
      <NewExpense onAddExpense={addEventHandler} />
    </div>
  );
};

export default App;
