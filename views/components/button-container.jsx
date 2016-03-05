'use strict';

var React = require('react');
var Button = require('./button.jsx');

var ButtonContainer = React.createClass({

    render: function () {
        return (
            <div className="button-container row center">
                <Button url={'/feed'} />
                <Button />
                <Button />
            </div>
        );
    }
});

module.exports = ButtonContainer;
