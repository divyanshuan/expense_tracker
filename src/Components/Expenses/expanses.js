import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./expanses.css";
import ExpensesFilter from "./ExpenseFilter";

const Expanses = (props) => {
  const [filterdyear, setFilteredyear] = useState("2020");
  const expensehandler = (yearselected) => {
    setFilteredyear(yearselected);
    console.log(yearselected);
  };
  const FilteredData = props.item.filter((data) => {
    return data.date.getFullYear().toString() === filterdyear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selecedyear={expensehandler}
          selectedyear={filterdyear}
        />
        {/* {props.item.map((data) => { */}
        {FilteredData.map((data) => {
          return (
            <ExpenseItem
              key={data.id}
              title={data.title}
              amount={data.amount}
              date={data.date}
            />
          );
        })}

        {/* 
      <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      />
      <ExpenseItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      />
      <ExpenseItem
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      /> */}
      </Card>
    </div>
  );
};

export default Expanses;
