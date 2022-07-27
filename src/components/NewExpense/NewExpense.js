import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [expand, setExpand] = useState(false);
  const { onAddExpense } = props;
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setExpand(false);
  };
  const addNewExpenseHandler = () => {
    setExpand(true);
  };
  const cancelExpenseHandler = () => {
    setExpand(false);
  };
  return (
    <div className="new-expense">
      {!expand && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
      {expand && (
        <ExpenseForm
          onCancel={cancelExpenseHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
