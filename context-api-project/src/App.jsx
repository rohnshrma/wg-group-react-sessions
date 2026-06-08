import Form from "./Form";
import Expenses from "./Expenses";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>Expense Handler</h1>
      <Form />
      <Expenses />
    </div>
  );
};

export default App;
