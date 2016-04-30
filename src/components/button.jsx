"use strict";

import React from "react";
import { Link } from "react-router";

const Button = ({ url }) => {

  return (
    <Link to={{ pathname: url }}>
      <button>Button</button>
    </Link>
  );
};

export default Button;
