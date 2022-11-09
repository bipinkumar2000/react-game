import React, { useContext } from "react";

import "./App.css";
import Login from "./Components/Login";
// import Card from "./UI/Card";
import AuthContext from "./Store/AuthContext";

function App() {
  const ctx = useContext(AuthContext);

  return (
    <div className="main-content">
      {!ctx.isLoggedIn && <Login />}
      {ctx.isLoggedIn && (
        <div>
          <p>hello world</p>
        </div>
      )}
    </div>
  );
}

export default App;
