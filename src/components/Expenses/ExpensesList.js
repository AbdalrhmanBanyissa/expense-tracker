import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  const { filteredExpenses } = props;

  if (filteredExpenses.length > 0) {
    return (
      <ul className="expenses-list">
        {filteredExpenses.map((e) => (
          <ExpenseItem
            key={e.id}
            title={e.title}
            amount={e.amount}
            date={e.date}
          />
        ))}
      </ul>
    );
  }
  return <h2 className="expenses-list__fallback">No expenses found.</h2>;
};

export default ExpensesList;
