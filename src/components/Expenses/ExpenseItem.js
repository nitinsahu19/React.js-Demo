import "./ExpenseItem.css";
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
// import ExpenseForm from "./ExpenseForm";
// import ExpenseFilter from "./ExpenseFilter";

const ExpenseItem = (props) => {
  // const {
  //   ExpenseTitle,
  //   ExpenseAmount,
  //   ExpenseDate,
  //   locationOfExpenditure,
  //   onDelete,
  // } = props;

  const [title, setTitle] = useState(props.ExpenseTitle);
  const clickHandler = () => {
    setTitle("Updated!!");
  };

  const [amount, setAmount] = useState(props.ExpenseAmount);
  const expenseHandler = () => {
    setAmount("100");
  };

  // const [filteredYear, setFilteredYear] = useState("2020");

  // const filterChangeHandler = (selectedYear) => {
  //   setFilteredYear(selectedYear);
  // };

  return (
    // <div className="expense-item">
    //   <h3>{title}</h3>
    //   <p>Amount: {amount}</p>
    //   <button onClick={expenseHandler}>Update</button>
    //   <p>Date: {ExpenseDate.toDateString()}</p>
    //   <p>Location: {locationOfExpenditure}</p>
    //   <button onClick={onDelete}>Delete</button>
    //   <button onClick={clickHandler}>Change title</button>
    // </div>

    <Card className="expense-item">
      <ExpenseDate ExpenseDate={props.ExpenseDate} />
      <ExpenseDetails
        ExpenseTitle={title}
        ExpenseAmount={amount}
        locationOfExpenditure={props.locationOfExpenditure}
      />
      <button onClick={expenseHandler}>Update</button>
      <button onClick={props.onDelete}>DELETE</button>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;

{
  /* <ExpenseFilter
  selected={filteredYear}
  onChangeFilter={filterChangeHandler}
/> */
}

// const Delete = () => {
//   const filteredExpenses = props.expenses.filter(
//     (expense) => expense.title !== props.id
//   );
//   setExpenses(filteredExpenses);
// };

// import ExpenseDate from "./ExpenseDate";
// import ExpenseDetails from "./ExpenseDetails";
// import Card from "../UI/Card";
