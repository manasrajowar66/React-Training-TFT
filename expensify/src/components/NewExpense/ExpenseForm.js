import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [formData, setFormData] = useState({
        title: "",
        amount: 0,
        date: ''
    });

    const onChangeHandler = (e) => {
        //console.log(e);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const new_expense = {
            title: formData.title,
            amount: parseInt(formData.amount),
            date: new Date(formData.date)
        }
        console.log(new_expense);
        props.addExpense(new_expense);
        setFormData({
            title: "",
            amount: 0,
            date: ''
        });
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input onChange={onChangeHandler} value={formData.title} name='title' type='text' />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input onChange={onChangeHandler} value={formData.amount} name='amount' type='number' min="0" step="1" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input onChange={onChangeHandler} value={formData.date} name="date" type='date' min="2019-01-01" max="2024-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={() => props.setShowForm(false)}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;