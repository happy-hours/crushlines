'use strict';

var React = require('react');
var SimpleRaisedButton = require('./material-button.jsx');

var ButtonContainer = React.createClass({

    render: function () {

        return (
            <div className="button-container row center">
                <SimpleRaisedButton />
                <SimpleRaisedButton />
                <SimpleRaisedButton />
            </div>
        );
    }
});

module.exports = ButtonContainer;