import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

const ExpenseList = (props) => {
    return (
        <ul className="expenses-list">
            {props.expenses.length === 0 && <h1 className="expenses-list__fallback">No Expenses Found.</h1>}
            {
                props.expenses.length > 0 && props.expenses.map((expence, index) => {
                    return (
                        <ExpenseItem
                            key={expence.id}
                            title={expence.title}
                            date={expence.date}
                            amount={expence.amount}
                        />
                    );
                })
            }
        </ul>
    )
}

export default ExpenseList;