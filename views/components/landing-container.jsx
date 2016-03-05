'use strict'

var React = require('react');
var SimpleRaisedButton = require('./material-button.jsx');
var LandingSlider = require('./slider.jsx');

var LandingContainer = React.createClass({
    render: function () {
        return (
            <div>
                <LandingSlider />
                <SimpleRaisedButton />
                <SimpleRaisedButton />
                <SimpleRaisedButton />
            </div>
        )
    }
});

module.exports = LandingContainer;
