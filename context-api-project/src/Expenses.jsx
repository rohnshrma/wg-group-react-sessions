import Expense from "./Expense";
import { useContext } from "react";
import ExpenseContext from "./context/ExpenseContext";
const Expenses = () => {
  const { expenses } = useContext(ExpenseContext);

  return (
    <div className="expenses">
      {expenses.map((expense) => {
        return <Expense key={expense.id} expense={expense} />;
      })}
    </div>
  );
};

export default Expenses;
