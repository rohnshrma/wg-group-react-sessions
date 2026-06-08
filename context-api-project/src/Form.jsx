import { useState, useContext } from "react";

import ExpenseContext from "./context/ExpenseContext";

const Form = () => {
  const { addExpenseHandler } = useContext(ExpenseContext);

  const [formData, setFormData] = useState({
    name: "",
    amount: 0,
  });

  const nameChangeHandler = (e) => {
    setFormData((prevData) => {
      return { name: e.target.value, amount: prevData.amount };
    });
  };
  const amountChangeHandler = (e) => {
    setFormData((prevData) => {
      return { name: prevData.name, amount: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addExpenseHandler(formData);

    setFormData({
      name: "",
      amount: 0,
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            value={formData.name}
            name="name"
            onChange={nameChangeHandler}
            placeholder="Expense Name"
          />
        </div>
        <div>
          <input
            type="number"
            value={formData.amount}
            name="amount"
            onChange={amountChangeHandler}
            placeholder="Expense Amount"
          />
        </div>
        <button>ADD EXPENSE</button>
      </form>
    </div>
  );
};

export default Form;
