import React, { useState, useReducer, useEffect, useContext } from "react";
import "./Login.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import AuthContext from "../Store/AuthContext";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.includes("@"),
    };
  }
  if (action.type === "USER_BLUR") {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.length > 6,
    };
  }
  if (action.type === "USER_BLUR") {
    return {
      value: state.value,
      isValid: state.value.length > 6,
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const Login = () => {
  // const [userEnteredEmail,setUserEnteredEmail] = useState('');
  // const [userEnteredPassword,setUserEnteredPassword] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  //   const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const ctx = useContext(AuthContext);

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  useEffect(() => {
    console.log("checking form validation");
    if (emailState.isValid && passwordState.isValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [emailState.isValid, passwordState.isValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({
      val: event.target.value,
      type: "USER_INPUT",
    });
    // setIsFormValid(emailState.isValid && passwordState.isValid);
  };

  const validateEmailHandler = () => {
    setIsFormValid(emailState.isValid && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({
      val: event.target.value,
      type: "USER_INPUT",
    });
    // setIsFormValid(emailState.isValid && passwordState.isValid);
  };

  const validatePasswordHandler = () => {
    setIsFormValid(emailState.isValid && passwordState.isValid);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("submit button is clicked");
    ctx.onLoggedIn(emailState.value, passwordState.value);
  };

  return (
    <div className="container">
      <div className="login_header">
        <h2 className="login_header_content">Welcome to the React</h2>
      </div>
      <Card className="card">
        <h3>LOGIN TO THE APP</h3>
        <label>UserName</label>
        <input
          type="text"
          id="enteredEmail"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <label>Password</label>
        <input
          type="password"
          id="enteredPassword"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <Button
          value="Log In"
          onSubmit={formSubmitHandler}
          disabled={!isFormValid}
        />
      </Card>
    </div>
  );
};
export default Login;
