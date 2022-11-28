import React, { useState } from "react";
import "./App.css";
import Expanses from "./Components/Expenses/expanses";
import NewExpenses from "./Components/NewExpenses/NewExpenses";

const dummyexpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(dummyexpenses);

  const getAllExpenses = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "let's Start here"),
  //   React.createElement(Expanses, { item: expenses })
  // );
  return (
    <div className="App">
      <h1>lets start</h1>
      <NewExpenses allExpenses={getAllExpenses} />
      <Expanses item={expenses} />
    </div>
  );
}

export default App;
