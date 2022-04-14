import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from '../UI/Card.js'

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = (e) => {
    setTitle("title changed");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button style={{ cursor: 'pointer' }} onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
