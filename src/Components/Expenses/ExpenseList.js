import React from "react";
import "./ExpanseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  return (
    <div>
      {" "}
      {/* {props.item.map((data) => { */}
      {props.item.length > 0 ? (
        props.item.map((data) => {
          return (
            <ExpenseItem
              key={data.id}
              title={data.title}
              amount={data.amount}
              date={data.date}
            />
          );
        })
      ) : (
        <h2 className="expenses-list__fallback ">No Expenses found</h2>
      )}
    </div>
  );
};

export default ExpenseList;
