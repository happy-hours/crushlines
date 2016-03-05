'use strict';

var React = require('react');
var Link = require('react-router').Link;
var SimpleRaisedButton = require('./material-button.jsx');


var Button = React.createClass({
    render: function () {

        return (
            <Link to={{pathname: this.props.url}}>
                <SimpleRaisedButton />
            </Link>
        );
    }
});

module.exports = Button;
