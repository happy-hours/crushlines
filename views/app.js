require('../assets/styles.js');
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;
var AppContainer = require('./components/app-container.jsx');
var Feed = require('./components/feed.jsx');
var InjectTapEventPlugin = require('react-tap-event-plugin');
InjectTapEventPlugin();

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={AppContainer}/>
        <Route path="/feed" component={Feed}/>
    </Router>
),document.getElementById('content')
);
