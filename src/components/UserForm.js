import React, { useState } from "react";
import { addUserAction } from "../actions/userActions";
import { connect } from "react-redux";
import "./form.css";
import { Button, Form } from "react-bootstrap";

//user sign up component
function UserForm(props) {
  // default user state is an object with empty string as value
  const [state, setState] = useState({
    noteTitle: "",
    noteDate: "",
    noteText: "",
  });

  //a function that get called anytime an input field changes
  function handleOnChange(event) {
    //event.target.name hold the name of the input that changed
    //event.target.value hold the new value of the input field that changed

    //we update the user state with the new value
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }

  //this function will be called the the create user button is clicked on
  function handleSubmit() {
    //we call addUser function passed to this user form component
    //as a prop from the App component
    let userId = 10000 + Math.random() * 10000000;
    let user = { ...state, id: userId };
    props.addUserAction(user);
    setState({
      noteTitle: "",
      noteDate: "",
      noteText: "",
    });
  }

  return (
    <div>
      <form className="formShadow">
        <div>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>
              <b>Note Title</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your note title"
              name="noteTitle"
              value={state.noteTitle} //the value will the same as data in the state
              onChange={handleOnChange} //we setup onchange to call our handle onchange function
              required
            />
          </Form.Group>
        </div>
        <br />
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            <b>Date Recorded</b>
          </Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter your date"
            name="noteDate"
            value={state.noteDate}
            onChange={handleOnChange} //we setup onchange to call our handle onchange function
            required
          />
        </Form.Group>

        <br />
        <Form.Group>
          <Form.Label>
            <b>Note Text</b>
          </Form.Label>
          <br />
          <textarea
            type="text"
            name="noteText"
            value={state.noteText}
            onChange={handleOnChange} //we setup onchange to call our handle onchange function
            placeholder="Enter your text here"
            required
            row="5"
            cols="30"
          ></textarea>
        </Form.Group>

        <br />

        <div>
          {/* the create user button call the handleSubmit functon when clicked */}
          <Button type="button" variant="primary" onClick={handleSubmit}>
            <span>Add New Note</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
// function mapStateToProps(state) {
//   return {
//     state: state,
//   };
// }
export default connect(null, { addUserAction })(UserForm);
