"use strict";

import React from "react";
import Button from "./button.jsx";

const ButtonContainer = () => {

  return (
    <div className="button-container row center">
      <Button url={"/feed"} />
      <Button />
      <Button />
    </div>
  );
};

export default ButtonContainer;
