import { useState } from "react";

const ComplexForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [finalData, setFinalData] = useState({
    name: "",
    email: "",
  });

  const nameChangeHandler = (e) => {
    var input = e.target.value;
    setFormData((prevData) => {
      console.log("Prev Data => ", prevData);
      return {
        name: input,
        email: prevData.email,
      };
    });
  };

  const emailChangeHandler = (e) => {
    var input = e.target.value;
    setFormData((prevData) => {
      console.log("Prev Data => ", prevData);
      return {
        name: prevData.name,
        email: input,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setFinalData(formData);
  };

  return (
    <div>
      <h1>{finalData.name}</h1>
      <p>{finalData.email}</p>
      <form className="form" onSubmit={submitHandler}>
        <div className="form-group">
          <input
            onChange={nameChangeHandler}
            type="text"
            className="form-control"
            placeholder="enter name"
          />
        </div>
        <div className="form-group">
          <input
            onChange={emailChangeHandler}
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <button className="btn btn-success btn-block">Submit</button>
      </form>
    </div>
  );
};

export default ComplexForm;
