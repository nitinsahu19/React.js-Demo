import ExpenseItem from "./ExpenseItem";
// import Expenses from "./Expenses";
// import App from "../../App";
const ExpensesList = (props) => {
  let expensesContent = <p>No expenses found.</p>;
  if (props.items.length > 0) {
    expensesContent = props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        ExpenseTitle={expense.title}
        ExpenseAmount={expense.amount}
        ExpenseDate={expense.date}
        locationOfExpenditure={expense.location}
        onDelete={() => props.onDelete(expense.id)}
      />
    ));
    if (props.items.length === 1) {
      expensesContent = [
        ...expensesContent,
        <p>Only one expense left!! Kindly add more expenses.</p>,
      ];
    }
  }
  return <ul>{expensesContent}</ul>;
};
export default ExpensesList;
