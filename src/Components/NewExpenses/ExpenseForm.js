import React, { useState } from "react";
import "./expenseform.css";

const ExpenseForm = (props) => {
  const [formdata, setFormata] = useState({ title: "", amount: "", date: "" });
  // const [title, setTitle] = useState("");
  // const [amount, setAmount] = useState("");
  // const [date, setDate] = useState("");

  // const titleChangeHandler = (e) => {
  //   setTitle(e.target.value);
  // };
  const setdata = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormata({ ...formdata, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      title: formdata.title,
      amount: formdata.amount,
      date: new Date(formdata.date),
    };
    props.newexpense(expenseData);
    setFormata({ ...formdata, title: "", amount: "", date: "" });
  };
  const canclebtnHandler = (e) => {
    e.preventDefault();
    const btnactive = false;
    props.btn(btnactive);
  };
  return (
    <div>
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              name="title"
              id=""
              onChange={setdata}
              value={formdata.title}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min={0.01}
              step={0.01}
              name="amount"
              id=""
              value={formdata.amount}
              onChange={setdata}
            />
          </div>
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="date"
              min="2019-01-01 "
              max="2023-01-01"
              name="date"
              value={formdata.date}
              onChange={setdata}
              id=""
            />
          </div>
        </div>
        <div className="new-expense__action">
          <button type="submit" onClick={canclebtnHandler}>
            {" "}
            cancle
          </button>
          <button type="submit" onClick={handleSubmit}>
            Add Events
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
