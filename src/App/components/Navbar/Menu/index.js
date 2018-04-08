import React, { Fragment, Component } from 'react'
import Header from './Header'
import Panel from './Panel'

export default class Menu extends Component {
	state = { isOpen: false }
	handleLogin = () => netlifyIdentity.open()
	openMenu = () => this.setState({ isOpen: true })
	closeMenu = () => this.setState({ isOpen: false })
	render = () => (
		<Fragment>
			<Header
				onClick={this.openMenu}
				pathname={this.props.location.pathname} />
			<Panel
				handleLogin={this.handleLogin}
				onClick={this.closeMenu}
				menuIsOpen={this.state.isOpen}
				username={this.props.user.name}
			/>
		</Fragment>
	)
}
