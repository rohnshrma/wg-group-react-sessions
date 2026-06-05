// We import useReducer from React.
// useReducer is another way to store and update changing data in a component.
// It is useful when the update logic has multiple possible actions.
import { useReducer } from "react";

// This is the simple flow of this form:
// user event -> handler function -> dispatch action -> reducer checks action -> reducer returns new state

// initialState is the starting data for our form.
// Think of it as the empty form before the user types anything.
const initialState = {
  // The name input starts empty.
  name: "",
  // The email input starts empty.
  email: "",
};

// formReducer is the function that decides HOW the form data should change.
// "state" means the current form data.
// "action" means the instruction we send, like "change name" or "reset form".
const formReducer = (state, action) => {
  // This logs the current state and the incoming action in the browser console.
  // It helps you see how reducer data moves step by step while learning.
  console.log("State => ", state, "action => ", action);

  // If the action says NAMECHANGE, we update only the name field.
  if (action.type === "NAMECHANGE") {
    // A reducer must return a new state object.
    // React will use this returned object as the latest formData.
    return {
      // action.payload contains the new name typed by the user.
      name: action.payload,
      // Keep the old email exactly as it was.
      // This is important because changing the name should not erase the email.
      email: state.email,
    };
  }

  // If the action says EMAILCHANGE, we update only the email field.
  if (action.type === "EMAILCHANGE") {
    // Return a new state object with the updated email.
    return {
      // Keep the old name exactly as it was.
      // This is important because changing the email should not erase the name.
      name: state.name,
      // action.payload contains the new email typed by the user.
      email: action.payload,
    };
  }

  // If the action says RESET, we clear the whole form.
  if (action.type === "RESET") {
    // Return the form back to empty values.
    return {
      // Clear the name input.
      name: "",
      // Clear the email input.
      email: "",
    };
  }

  // If the reducer receives an action type it does not understand,
  // return the current state unchanged.
  return state;
};

// ComplexForm is a React component.
// It displays a form and sends the submitted data to its parent component.
const ComplexForm = (props) => {
  // props is the object of things passed from the parent component.
  // Here we take out onAdd, which is a function from the parent.
  const { onAdd } = props;

  // useReducer gives us two things:
  // formData: the current form state, like { name: "Rohan", email: "..." }
  // dispatch: a function used to send actions to the reducer.
  // formReducer: the function that knows how to update the state.
  // initialState: the starting value when the component first loads.
  const [formData, dispatch] = useReducer(formReducer, initialState);

  // This function runs whenever the user types in the name input.
  const nameChangeHandler = (e) => {
    // e is the event object from the browser.
    // e.target is the input box that changed.
    // e.target.value is the latest text inside that input box.
    var input = e.target.value;

    // dispatch sends an action to formReducer.
    // type tells the reducer what kind of change we want.
    // payload carries the actual new value typed by the user.
    dispatch({ type: "NAMECHANGE", payload: input });
  };

  // This function runs whenever the user types in the email input.
  const emailChangeHandler = (e) => {
    // Store the latest email text typed by the user.
    var input = e.target.value;

    // Send an EMAILCHANGE action to the reducer with the new email value.
    dispatch({ type: "EMAILCHANGE", payload: input });
  };

  // This function runs when the form is submitted.
  const submitHandler = (e) => {
    // Stop the browser's default form behavior.
    // Without this, the page may refresh after clicking Submit.
    e.preventDefault();

    // Send the current formData to the parent component using onAdd.
    // The parent can then add it to a list, show it on screen, or store it.
    onAdd(formData);

    // After submitting, send a RESET action to clear the form fields.
    dispatch({ type: "RESET" });
  };

  // The JSX below describes what should appear on the page.
  return (
    // This div wraps the whole form.
    <div>
      {/* onSubmit connects the form submit event to submitHandler. */}
      <form className="form" onSubmit={submitHandler}>
        {/* This group contains the name input. */}
        <div className="form-group">
          {/* This input lets the user type their name. */}
          <input
            // Run nameChangeHandler every time the name input changes.
            onChange={nameChangeHandler}
            // This is a normal text input.
            type="text"
            // These CSS classes are used for styling the input.
            className="form-control"
            // Placeholder is the hint text shown before typing.
            placeholder="enter name"
            // The input value comes from formData.name.
            // This makes React the boss of the input value.
            value={formData.name}
            // The name attribute labels this input as the name field.
            name="name"
          />
        </div>

        {/* This group contains the email input. */}
        <div className="form-group">
          {/* This input lets the user type their email. */}
          <input
            // Run emailChangeHandler every time the email input changes.
            onChange={emailChangeHandler}
            // type="email" tells the browser this should be an email address.
            type="email"
            // These CSS classes are used for styling the input.
            className="form-control"
            // Placeholder is the hint text shown before typing.
            placeholder="Enter email"
            // The input value comes from formData.email.
            // When RESET happens, this becomes empty again.
            value={formData.email}
            // The name attribute labels this input as the email field.
            name="email"
          />
        </div>

        {/* This button submits the form because it is inside the form tag. */}
        <button className="btn btn-success btn-block">Submit</button>
      </form>
    </div>
  );
};

// Exporting lets other files import and use this ComplexForm component.
export default ComplexForm;
