import ExpenseItem from "./components/Expenses/ExpenseItem";

const App = () => {
  const expenses = [
    {
      title: "Toilet paper",
      amount: 98.23,
      date: new Date(2023, 7, 14),
      location: "Jaipur",
    },
    {
      title: "Car Insurance",
      amount: 323.32,
      date: new Date(2023, 4, 13),
      location: "Sawai-Madhopur",
    },
    {
      title: "New TV",
      amount: 3432.33,
      date: new Date(2023, 9, 4),
      location: "Ajmer",
    },
    {
      title: "Cycle",
      amount: 5500,
      date: new Date(2023, 11, 9),
      location: "Tonk",
    },
    {
      title: "Speaker",
      amount: 2550,
      date: new Date(2023, 11, 8),
      location: "Shivdaspura",
    },
  ];

  return (
    <div>
      <h2>Expense Tracker</h2>
      {expenses.map((expense, index) => (
        <ExpenseItem
          ExpenseTitle={expense.title}
          ExpenseAmount={expense.amount}
          ExpenseDate={expense.date}
          x
          locationOfExpenditure={expense.location}
        />
      ))}
    </div>
  );
}

export default App;

{
  /* <ExpenseItem
  ExpenseTitle={expenses[0].title}
  ExpenseAmount={expenses[0].amount}
  ExpenseDate={expenses[0].date}
></ExpenseItem>
<ExpenseItem
  ExpenseTitle={expenses[1].title}
  ExpenseAmount={expenses[1].amount}
  ExpenseDate={expenses[1].date}
></ExpenseItem>
<ExpenseItem
  ExpenseTitle={expenses[2].title}
  ExpenseAmount={expenses[2].amount}
  ExpenseDate={expenses[2].date}
></ExpenseItem>
<ExpenseItem
  ExpenseTitle={expenses[3].title}
  ExpenseAmount={expenses[3].amount}
  ExpenseDate={expenses[3].date}
></ExpenseItem>
<ExpenseItem
  ExpenseTitle={expenses[4].title}
  ExpenseAmount={expenses[4].amount}
  ExpenseDate={expenses[4].date}
></ExpenseItem> */
}
