import ExpenseItem from "./ExpenseItem";
import "./ExpenseItems.css";
const ExpenseItems = (props) => {
  return (
    <div className="expenses">
      {props.expenses.map((expence, index) => {
        return (
          <ExpenseItem
            key={index}
            title={expence.title}
            date={expence.date}
            amount={expence.amount}
          />
        );
      })}
    </div>
  );
};

export default ExpenseItems;
