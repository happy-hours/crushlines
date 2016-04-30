"use strict";

import React from "react";
import { Link } from "react-router";
import SimpleRaisedButton from "./material-button.jsx";


const Button = ({ url }) => {

  return (
    <Link to={{ pathname: url }}>
      <SimpleRaisedButton />
    </Link>
  );
};

export default Button;
