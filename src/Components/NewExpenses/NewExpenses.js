import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./newexpenses.css";

const NewExpenses = (props) => {
  const getExpensedata = (savedexpenses) => {
    const expenseData = {
      ...savedexpenses,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.allExpenses(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm newexpense={getExpensedata} />
    </div>
  );
};

export default NewExpenses;
