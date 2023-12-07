import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const AddUser = (props) => {

// Removing state for inputs and using refs

//   const [enteredUserName, setEnteredUserName] = useState("");
//   const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUserName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input!",
        message: "Please enter valid inputs (non-empty)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age!",
        message: "Please enter valid age",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    // setEnteredUserName("");
    // setEnteredAge("");
    nameInputRef.current.value = ''; // this method (chaging dom value using ref) is not best method, pnyl do it when resetting inputs
    ageInputRef.current.value = '';
  };

//   const userNameChangeHandler = (event) => {
//     setEnteredUserName(event.target.value);
//   };

//   const ageChangeHandler = (event) => {
//     setEnteredAge(event.target.value);
//   };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      { error && <Modal title={error.title} message={error.message} onDismiss={errorHandler} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUserName}
            // onChange={userNameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
