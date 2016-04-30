"use strict";

import React from "react";
import RaisedButton from "material-ui/lib/raised-button";

const SimpleRaisedButton = () => {

  return (
    <div className="col s4">
      <RaisedButton label="Something" secondary={ true } />
    </div>
  );
};

export default SimpleRaisedButton;
