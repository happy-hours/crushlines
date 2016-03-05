'use strict'

var React = require('react');
var Slider = require('react-slick');

var LandingSlider = React.createClass({
    render: function () {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <Slider className='slider-custom' {...settings}>
                <div className="slider1 col s12"><h3>1</h3></div>
                <div className="slider2 col s12"><h3>2</h3></div>
                <div className="slider3 col s12"><h3>3</h3></div>
            </Slider>
        );
    }
});

module.exports = LandingSlider;
