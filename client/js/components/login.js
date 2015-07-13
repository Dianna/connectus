var React = require('react');
var ReactAddons = require('react/addons');
var ReactMixin = require('react-mixin');
// var Auth = require('../services/AuthService');

var Login = React.createClass({

  render: function(){
    return (
  	  <div className="login">
        <h1>Signup</h1>
        <form role="form" className="ui form">
	        <div className="field">
	          <label htmlFor="username">Username</label>
	          <input type="text" valueLink={this.linkState('user')} className="form-control" id="username" placeholder="Username" />
	        </div>
	        <div className="field">
	          <label htmlFor="password">Password</label>
	          <input type="password" valueLink={this.linkState('password')} className="form-control" id="password" ref="password" placeholder="Password" />
	        </div>
	        <button type="submit" className="ui button" onClick={this.signup.bind(this)}>Submit</button>
        </form>
      </div>
    );
  }

});

module.exports = Login;