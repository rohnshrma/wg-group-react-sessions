import { useState } from "react";

const Form = () => {
  const [txt, setTxt] = useState("");
  const [name, setName] = useState("");

  const changeHandler = (e) => {
    var input = e.target.value;
    setTxt(input);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setName(txt);
  };
  return (
    <div>
      <h1>{name}</h1>
      <form className="form" onSubmit={submitHandler}>
        <div className="form-group">
          <input
            onChange={changeHandler}
            type="text"
            className="form-control"
          />
        </div>
        <button className="btn btn-success btn-block">Submit</button>
      </form>
    </div>
  );
};

export default Form;
