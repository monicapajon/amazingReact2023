
import React from "react";
import { Link } from "react-router-dom";
import 'bulma/css/bulma.css';

const Button = () => {
  return (
    <div className="buttons">
      <Link to="/" className="button is-primary">
        Button
      </Link>
    </div>
  );
};

export default Button;
