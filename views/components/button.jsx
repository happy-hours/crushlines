'use-strict'

var React = require('react');

var Button = React.createClass({
    render: function () {
        console.log(this.props);
        return (
            <div className="button">
                <a href={this.props.href}>
                    <p>
                        <i className={this.props.icon}></i> {this.props.title}
                    </p>
                </a>
            </div>
        )
    }
});

module.exports = Button;
