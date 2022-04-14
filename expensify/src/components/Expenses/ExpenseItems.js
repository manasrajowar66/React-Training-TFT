import React, { useState } from "react";
import "./ExpenseItems.css";
import Card from '../UI/Card.js';
import ExpensesFilter from "./ExpenseFilter.js";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const ExpenseItems = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const onFilteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  }

  const filterExpenses = props.expenses.filter(expence => {
    return expence.date.getFullYear() === parseInt(filteredYear);
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onFilteredChangeHandler={onFilteredChangeHandler} />
      <ExpenseChart expenses={filterExpenses} />
      <ExpenseList expenses={filterExpenses} />
    </Card>
  );
};

export default ExpenseItems;
