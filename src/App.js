import React, { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";

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

  const deleteExpenseHandler = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          ExpenseTitle={expense.title}
          ExpenseAmount={expense.amount}
          ExpenseDate={expense.date}
          locationOfExpenditure={expense.location}
          onDelete={() => deleteExpenseHandler(expense.id)}
        />
      ))}
    </div>
  );
};

export default App;
