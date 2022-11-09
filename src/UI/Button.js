import React from "react";

import Classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={Classes.container}>
      <button
        className={Classes.button}
        type={props.type}
        id={props.id}
        onClick={props.onSubmit}
        disabled={props.disabled}
      >
        {props.value}
      </button>
    </div>
  );
};

export default Button;
