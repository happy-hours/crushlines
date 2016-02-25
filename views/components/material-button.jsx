'use strict'

var React = require('react');
var RaisedButton = require('material-ui/lib/raised-button');

var style = {
    margin: 12
};

var SimpleRaisedButton = function () {
    return (
        
        <RaisedButton label="Something" secondary={true} style={style} />
        
    )
}

module.exports = SimpleRaisedButton;