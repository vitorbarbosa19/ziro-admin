import React, { Fragment, Component } from 'react'

export default class Login extends Component {
	handleLogin = () => netlifyIdentity.open()
	render = () => (
		<Fragment>
			<div>Login</div>
			<button onClick={this.handleLogin}>
				Login
			</button>
		</Fragment>
	)
}