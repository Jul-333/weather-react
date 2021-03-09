import React from "react";
import "./Button.css";

const Button = ({ click, style, name, id }) => {
  return (
    <button type="button" onClick={() => click(id)} className={style}>
      {name}
    </button>
  );
};

export default Button;
