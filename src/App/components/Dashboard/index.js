import React, { Fragment, Component } from 'react'

export default class Dashboard extends Component {
	handleLogin = () => netlifyIdentity.open()
	render = () => (
		<Fragment>
			<div>Dashboard</div>
			<button onClick={this.handleLogin}>
				Logout
			</button>
		</Fragment>
	)
}
