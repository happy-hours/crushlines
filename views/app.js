require('../assets/styles.js');
var React = require('react');
var ReactDOM = require('react-dom');
var AppContainer = require('./components/app-container.jsx');
var InjectTapEventPlugin = require('react-tap-event-plugin');
InjectTapEventPlugin();

ReactDOM.render(
    <AppContainer />,
    document.getElementById('content')
);
