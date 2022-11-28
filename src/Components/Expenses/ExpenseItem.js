import "./expenseitem.css";
import Card from "../UI/Card";
import { useState } from "react";
const ExpanseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  // let title = props.title;
  const clickHandler = () => {
    setTitle("Updated");
    console.log("clicked");
  };
  return (
    <>
      <Card className="expense-item">
        <ExpanseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">&#8377;{props.amount}</div>
        </div>
        <button onClick={clickHandler}> Edit </button>
      </Card>
    </>
  );
}
export default ExpenseItem;
