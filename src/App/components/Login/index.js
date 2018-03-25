import React, { Component } from 'react'
import netlifyIdentity from 'netlify-identity-widget'

export default class Login extends Component {
	componentDidMount = () => {
		netlifyIdentity.init()
		netlifyIdentity.on('login', (login) => {
			console.log(login)
		})
	}
	handleLogin = () => netlifyIdentity.open()
	render = () => (
		<button onClick={this.handleLogin}>Login</button>
	)
}