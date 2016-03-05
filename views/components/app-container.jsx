'use strict';

var React = require('react');
var LandingContainer = require('./landing-container.jsx');

var AppContainer = React.createClass({
    render: function () {
        return (
            <LandingContainer />
        );
    }
});

module.exports = AppContainer;
