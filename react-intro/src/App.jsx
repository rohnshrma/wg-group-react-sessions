import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Count from "./Count";
import Header from "./Header";
import Timer from "./Timer";
import Form from "./Form";
import ComplexForm from "./ComplexForm";
const App = () => {
  console.log("App Re-rendered");
  return (
    <div>
      {/* <Header text="Counter App" /> */}
      <hr />
      {/* <Count /> */}
      <hr />
      {/* <Timer /> */}
      <hr />
      {/* <Form /> */}
      <ComplexForm />
    </div>
  );
};

export default App;
