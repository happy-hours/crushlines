'use strict'

var React = require('react');
var LandingSlider = require('./slider.jsx');
var ButtonContainer = require('./button-container.jsx');

var LandingContainer = React.createClass({

    render: function () {

        return (
            <div>
                <LandingSlider />
                <ButtonContainer />
            </div>
        )
    }
});

module.exports = LandingContainer;
