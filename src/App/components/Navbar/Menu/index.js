import React, { Component } from 'react'
import Panel from './Panel'
import IconMenu from '../../BasicUI/IconMenu'
import { container } from './styles'

export default class Menu extends Component {
	state = { isOpen: false }
	handleLogin = () => netlifyIdentity.open()
	openMenu = () => this.setState({ isOpen: true })
	closeMenu = () => this.setState({ isOpen: false })
	render = () => (
		<div style={container}>
			<IconMenu onClick={this.openMenu} />
			<Panel
				handleLogin={this.handleLogin}
				onClick={this.closeMenu}
				menuIsOpen={this.state.isOpen}
				username={this.props.username}
			/>
		</div>
	)
}
