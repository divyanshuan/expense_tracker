import React from "react";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./newexpenses.css";

const NewExpenses = (props) => {
  const [showbtn, setShowbtn] = useState(false);
  const getExpensedata = (savedexpenses) => {
    const expenseData = {
      ...savedexpenses,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.allExpenses(expenseData);
  };
  const btnhandler = (btncodition) => {
    setShowbtn(btncodition);
    // console.log(btncodition);
  };
  const formOpener = () => {
    setShowbtn(true);
  };

  return (
    <div className="new-expense">
      {showbtn ? (
        <ExpenseForm newexpense={getExpensedata} btn={btnhandler} />
      ) : (
        <button onClick={formOpener}>Add item</button>
      )}
    </div>
  );
};

export default NewExpenses;
