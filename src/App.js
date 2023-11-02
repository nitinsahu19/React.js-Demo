import React, { useState } from "react";
import NewExpense from "./components/Expenses/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = (props) => {
  const [expenses, setExpenses] = useState([
    {
      title: "Toilet paper",
      amount: 98.23,
      date: new Date(2020, 7, 14),
      location: "Jaipur",
      id: 1,
    },
    {
      title: "Car Insurance",
      amount: 323.32,
      date: new Date(2021, 4, 13),
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
      date: new Date(2022, 11, 9),
      location: "Tonk",
      id: 4,
    },
    {
      title: "Speaker",
      amount: 2550,
      date: new Date(2019, 11, 8),
      location: "Shivdaspura",
      id: 5,
    },
    {
      title: "Laptop",
      amount: 1200,
      date: new Date(2021, 10, 15),
      location: "Delhi",
      id: 6,
    },
    {
      title: "Groceries",
      amount: 120.5,
      date: new Date(2022, 10, 20),
      location: "Mumbai",
      id: 7,
    },
    {
      title: "Restaurant Dinner",
      amount: 85.5,
      date: new Date(2029, 10, 25),
      location: "Bangalore",
      id: 8,
    },
    {
      title: "Movie Tickets",
      amount: 30,
      date: new Date(2020, 10, 27),
      location: "Chennai",
      id: 9,
    },
    {
      title: "Laptop",
      amount: 1200,
      date: new Date(2021, 10, 15),
      location: "Delhi",
      id: 10,
    },
    {
      title: "Groceries",
      amount: 120.5,
      date: new Date(2022, 10, 20),
      location: "Mumbai",
      id: 11,
    },
    {
      title: "Toilet paper",
      amount: 98.23,
      date: new Date(2020, 7, 14),
      location: "Jaipur",
      id: 12,
    },
    {
      title: "Car Insurance",
      amount: 323.32,
      date: new Date(2021, 4, 13),
      location: "Sawai-Madhopur",
      id: 13,
    },
    {
      title: "New TV",
      amount: 3432.33,
      date: new Date(2022, 9, 4),
      location: "Ajmer",
      id: 14,
    },
    {
      title: "Cycle",
      amount: 5500,
      date: new Date(2022, 11, 9),
      location: "Tonk",
      id: 15,
    },
  ]);
  const addEventHandler = (expense) => {
    const newArr = [expense, ...expenses];
    setExpenses(newArr);
    console.log(newArr);
  };

  const deleteExpenseHandler = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <Expenses items={expenses} onDelete={deleteExpenseHandler} />
      <NewExpense onAddExpense={addEventHandler} />
    </div>
  );
};

export default App;
