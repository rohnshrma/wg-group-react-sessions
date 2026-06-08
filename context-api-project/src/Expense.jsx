import { useContext } from "react";
import ExpenseContext from "./context/ExpenseContext";

const Expense = ({ expense }) => {
  const { removeExpenseHandler } = useContext(ExpenseContext);
  return (
    <div className="expense">
      <h2>{expense.name}</h2>
      <p>{expense.amount}</p>
      <button onClick={() => removeExpenseHandler(expense.id)}>DELETE</button>
    </div>
  );
};

export default Expense;
