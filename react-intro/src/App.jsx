import Header from "./Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import data from "./data.js";
import Card from "./Card.jsx";

const App = () => {
  var isLight = true;

  var properties = {
    backgroundColor: isLight ? "#fff" : "#333",
    color: isLight ? "#333" : "#fff",
  };

  return (
    <div style={properties}>
      <Header text="Pokemon's" />

      <hr />

      {data.map((item) => (
        <Card name={item.name} type={item.type} key={item.id} />
      ))}
    </div>
  );
};

export default App;
