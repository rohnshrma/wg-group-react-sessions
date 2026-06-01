import { useState } from "react";

const Form = () => {
  const [txt, setTxt] = useState("");

  const changeHandler = (e) => {
    var input = e.target.value;
    setTxt(input);
  };

  return (
    <div>
      <h1>{txt}</h1>
      <form className="form">
        <div className="form-group">
          <input
            onChange={changeHandler}
            type="text"
            className="form-control"
          />
        </div>
        {/* <button className="btn btn-success btn-block">Submit</button> */}
      </form>
    </div>
  );
};

export default Form;
