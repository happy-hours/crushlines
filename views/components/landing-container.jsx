'use strict'

var React = require('react');
var Button = require('./button.jsx');

var LandingContainer = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Crushlines</h1>
                <Button title={'facebook'} icon={'fa fa-facebook-official'} href={'#'} />
                <Button title={'twitter'} icon={'fa fa-twitter'} href={'#'} />
                <Button title={'google'} icon={'fa fa-google'} href={'#'} />
            </div>
        )
    }
});

module.exports = LandingContainer;
