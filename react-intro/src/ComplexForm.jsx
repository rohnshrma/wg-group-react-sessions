// We import useState from React so this component can remember changing values.
import { useState } from "react";

// ComplexForm is a React component. Think of it like a reusable form box.
const ComplexForm = (props) => {
  // props is the object of values/functions sent from the parent component.
  // Here we pull out only the onAdd function from props.
  const { onAdd } = props;

  // formData stores the current text typed inside the form inputs.
  // setFormData is the function we use whenever we want to update formData.
  const [formData, setFormData] = useState({
    // At the start, the name input is empty.
    name: "",
    // At the start, the email input is also empty.
    email: "",
  });

  // changeHandler runs every time the user types in any input field.
  const changeHandler = (e) => {
    // e means "event". It carries details about what just happened.
    // e.target means the exact input field where the user typed.
    // name is the input's name attribute, like "name" or "email".
    // value is the latest text written inside that input.
    var { name, value } = e.target;

    // This prints the changing field name and value in the browser console.
    // Example: name Rohan, or email rohan@gmail.com
    console.log(name, value);

    // We update formData using the previous formData as the starting point.
    setFormData((prevData) => {
      // React expects us to return the new updated object from here.
      return {
        // ...prevData copies all older values first.
        // This prevents the other input field from being erased.
        ...prevData,
        // [name] means "use the input's name as the key".
        // If name is "email", this updates email.
        // If name is "name", this updates name.
        [name]: value,
      };
    });
  };

  // submitHandler runs when the user clicks Submit or presses Enter in the form.
  const submitHandler = (e) => {
    // By default, a browser reloads the page after form submit.
    // preventDefault stops that reload so React can handle the form smoothly.
    e.preventDefault();

    // We send the completed formData object to the parent component.
    // The parent decides what to do with this new data.
    onAdd(formData);

    // After submitting, we clear the input fields by resetting formData.
    setFormData({
      // Empty name field again.
      name: "",
      // Empty email field again.
      email: "",
    });
  };

  // Whatever we return from a React component becomes visible on the screen.
  return (
    // This outer div simply wraps the whole form.
    <div>
      {/* The form groups the inputs and connects submitHandler to form submit. */}
      <form className="form" onSubmit={submitHandler}>
        {/* This div is only for styling/grouping the name input. */}
        <div className="form-group">
          {/* This input is where the user types their name. */}
          <input
            // When the user types, changeHandler updates formData.
            onChange={changeHandler}
            // type="text" means normal text can be entered here.
            type="text"
            // className applies CSS classes for styling.
            className="form-control"
            // placeholder is the grey hint shown before the user types.
            placeholder="enter name"
            // value connects this input to formData.name.
            // This makes it a controlled input, meaning React controls its value.
            value={formData.name}
            // name="name" tells changeHandler which field to update.
            name="name"
          />
        </div>
        {/* This div is only for styling/grouping the email input. */}
        <div className="form-group">
          {/* This input is where the user types their email address. */}
          <input
            // When the user types, changeHandler updates formData.
            onChange={changeHandler}
            // type="email" gives browser email-related checks and keyboard help.
            type="email"
            // className applies CSS classes for styling.
            className="form-control"
            // placeholder is the grey hint shown before the user types.
            placeholder="Enter email"
            // value connects this input to formData.email.
            // React always shows whatever is stored in formData.email.
            value={formData.email}
            // name="email" tells changeHandler to update the email field.
            name="email"
          />
        </div>
        {/* This button submits the form because it is inside a form element. */}
        <button className="btn btn-success btn-block">Submit</button>
      </form>
    </div>
  );
};

// This makes ComplexForm available to import and use in other files.
export default ComplexForm;
