import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ExpenseContext = createContext();

export const ExpenseContextProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [
      { ...expense, id: uuidv4() },
      ...prevExpenses,
    ]);
  };

  const removeExpenseHandler = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <ExpenseContext.Provider
      value={{ expenses, addExpenseHandler, removeExpenseHandler }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
