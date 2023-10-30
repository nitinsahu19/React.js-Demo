import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // const getTitle = (event) =>  {
  //         console.log(event.target.value)
  //     }

  // const [title, setTitle] = useState(" ");
  // const [amount, setamount] = useState(" ");
  // const [date, setdate] = useState(" ");
  // const [location, setlocation] = useState(" ");

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    entereDate: "",
    enteredLocation: "",
  });

  const titleHandler = (event) => {
    // setTitle(event.target.value);
    // console.log(title);

    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
    console.log(userInput.enteredTitle);
  };

  const amountHandler = (event) => {
    // setamount(event.target.value);
    // console.log(amount);

    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
    console.log(userInput.enteredAmount);
  };

  const dateHandler = (event) => {
    // setdate(event.target.value);
    // console.log(date);

    setUserInput({
      ...userInput,
      entereDate: event.target.value,
    });
    console.log(userInput.entereDate);
  };

  const locationHandler = (event) => {
    // setlocation(event.target.value);
    // console.log(location);

    setUserInput({
      ...userInput,
      enteredLocation: event.target.value,
    });
    console.log(userInput.enteredLocation);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.entereDate),
      location: userInput.enteredLocation,
    };
    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler} className="expense-form-container">
      <label htmlFor="" className="expense-label">
        Expense title:
        <input
          type="text"
          name="title"
          id="title"
          className="expense-input"
          onChange={titleHandler}
        />
      </label>
      <label htmlFor="amount" className="expense-label">
        Expense amount:
        <input
          type="text"
          name="amount"
          id="amount"
          className="expense-input"
          onChange={amountHandler}
        />
      </label>
      <label htmlFor="date" className="expense-label">
        Expense date:
        <input
          type="date"
          name="date"
          id="date"
          className="expense-input"
          onChange={dateHandler}
        />
      </label>
      <label htmlFor="location" className="expense-label">
        Location:
        <input
          type="text"
          name="location"
          id="location"
          className="expense-input"
          onChange={locationHandler}
        />
      </label>
      <button className="add-expense-button">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
