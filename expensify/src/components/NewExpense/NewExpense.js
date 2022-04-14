import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm.js";

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);
    return (
        <div className="new-expense">
            {showForm ?
                <ExpenseForm addExpense={props.addExpense} setShowForm={setShowForm} />
                :
                <button onClick={() => setShowForm(prevState => !prevState)}>Add New Expense</button>
            }
        </div>
    )
}

export default NewExpense;