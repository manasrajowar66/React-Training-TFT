import React, { useState } from "react";
import ExpenseItems from "./components/Expenses/ExpenseItems";
import NewExpense from './components/NewExpense/NewExpense';
import expenses from './Utils/expenses.js';
import './test.js';
function App() {
  const [items, addItem] = useState([...expenses]);
  // console.log(items);

  const addExpense = (formData) => {
    addItem((prevState) => {
      return [{ ...formData, id: `e${prevState.length + 1}` }, ...prevState];
    });
  }

  return (
    <div>
      <NewExpense expenses={items} addExpense={addExpense} />
      <ExpenseItems expenses={items} />
    </div>
  );
}

export default App;
