import React, { useState } from "react";

import classes from "./AddUser.module.css";
import { Card } from "../Card/Card";
import Button from "../Button/Button";
import ErrorModal from "../ErrorModal/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 || +enteredAge < 1) {
      setError({
        title: "An error occurred!",
        message: "Please enter a valid name or age!"
      })
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null)
  }

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUsername}
            onChange={usernameChangeHandler}
            className={classes.input}
          />
          <label htmlFor="age">Age (Years) </label>
          <input
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
            id="age"
            className={classes.input}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
