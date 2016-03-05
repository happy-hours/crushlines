'use strict'

var React = require('react');
var ReactDOM = require('react-dom');
var Slider = require('react-slick');

var LandingSlider = React.createClass({
    componentDidMount () {
        $('.slider-custom').slick({
            infinite:true,
            dots: true
        });
    },
    render: function () {

        return (
            <div className='slider-custom'>
                <div className="slider1"><h3>1</h3></div>
                <div className="slider2"><h3>2</h3></div>
                <div className="slider3"><h3>3</h3></div>
            </div>
        );
    }
});

module.exports = LandingSlider;
