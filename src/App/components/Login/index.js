import React, { Component } from 'react'

export default class Login extends Component {
	handleLogin = () => netlifyIdentity.open()
	render = () => (
		<button onClick={this.handleLogin}>Login</button>
	)
}