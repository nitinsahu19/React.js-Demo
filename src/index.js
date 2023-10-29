import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ExpenseForm from "./components/Expenses/ExpenseForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    [<App />, < ExpenseForm /> ]
  </div>
);
