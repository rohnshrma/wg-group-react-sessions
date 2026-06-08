import { act, useReducer } from "react";

const initialState = {
  name: "",
  email: "",
};

const formReducer = (state, action) => {
  console.log("State => ", state, "action => ", action);

  if (action.type === "name" || action.type === "email") {
    return {
      ...state,
      [action.type]: action.payload,
    };
  }

  if (action.type === "RESET") {
    return {
      name: "",
      email: "",
    };
  }

  return state;
};

const ComplexForm = (props) => {
  const { onAdd } = props;
  const [formData, dispatch] = useReducer(formReducer, initialState);

  const changeHandler = (e) => {
    var { name, value } = e.target;
    dispatch({ type: name, payload: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onAdd(formData);
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div className="form-group">
          <input
            onChange={changeHandler}
            type="text"
            className="form-control"
            placeholder="enter name"
            value={formData.name}
            name="name"
          />
        </div>

        <div className="form-group">
          <input
            onChange={changeHandler}
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={formData.email}
            name="email"
          />
        </div>

        <button className="btn btn-success btn-block">Submit</button>
      </form>
    </div>
  );
};

export default ComplexForm;
