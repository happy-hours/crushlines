"use strict";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";

class LandingSlider extends Component {

  constructor () {
    super();
  }

  componentDidMount () {
    $(".slider-custom").slick({
      infinite: true,
      dots: true
    });
  }

  render () {

    return (
      <div className="slider-custom">
        <div className="slider1"><h3>1</h3></div>
        <div className="slider2"><h3>2</h3></div>
        <div className="slider3"><h3>3</h3></div>
      </div>
    );
  }
}

export default LandingSlider;
