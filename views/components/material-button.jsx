'use strict'

var React = require('react');
var RaisedButton = require('material-ui/lib/raised-button');

var SimpleRaisedButton = function () {

    return (
        <div className="col s4">
            <RaisedButton label="Something" secondary={ true } />
        </div>
    );
}

module.exports = SimpleRaisedButton;
