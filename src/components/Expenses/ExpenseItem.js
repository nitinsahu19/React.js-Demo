import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  
  return (
    <Card className="expense-item">
      <ExpenseDate ExpenseDate={props.ExpenseDate} />
      <ExpenseDetails
        ExpenseTitle={props.ExpenseTitle}
        ExpenseAmount={props.ExpenseAmount}
        locationOfExpenditure={props.locationOfExpenditure}
      />
    </Card>
  );
};

export default ExpenseItem;