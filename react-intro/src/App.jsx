import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Count from "./Count";
import Header from "./Header";
import Timer from "./Timer";
import Form from "./Form";
import ComplexForm from "./ComplexForm";
import UserCard from "./UserCard";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = (userObj) => {
    setUsers((prevUsers) => [userObj, ...prevUsers]);
  };

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
      <ComplexForm onAdd={addUserHandler} />

      {users.map((user, i) => {
        return <UserCard key={i} user={user} />;
      })}
    </div>
  );
};

export default App;
