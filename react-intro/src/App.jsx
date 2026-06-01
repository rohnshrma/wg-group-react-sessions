import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Count from "./Count";
import Header from "./Header";
import Timer from "./Timer";
import Form from "./Form";
const App = () => {
  console.log("App Re-rendered");
  return (
    <div>
      <Header text="Counter App" />
      <hr />
      <Count />
      <hr />
      {/* <Timer /> */}
      <hr />
      <Form />
    </div>
  );
};

export default App;
