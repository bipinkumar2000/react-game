import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLoggedIn: (enteredEmail, enteredPassword) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutHandler = () => {
    console.log("Entered login handler in auth context");
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  const logInHandler = (enteredEmail, enteredPassword) => {
    console.log("Entered login handler in auth context");
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  useEffect(() => {
    let userLoggedCheckInVariable = localStorage.getItem("isLoggedIn");
    console.log(userLoggedCheckInVariable);
    if (userLoggedCheckInVariable === "1") {
      console.log("setted is logged in");
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLoggedIn: logInHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
