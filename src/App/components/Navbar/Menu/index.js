import React, { Component } from 'react'
import Header from './Header/index'
import Panel from './Panel/index'

export default class Menu extends Component {
	state = { isOpen: false }
	handleLogin = () => netlifyIdentity.open()
	openMenu = () => this.setState({ isOpen: true })
	closeMenu = () => this.setState({ isOpen: false })
	render = () => [
		<Header
			key='Header'
			openMenu={this.openMenu}
			pathname={this.props.location.pathname}
		/>,
		<Panel
			key='Panel'
			handleLogin={this.handleLogin}
			closeMenu={this.closeMenu}
			menuIsOpen={this.state.isOpen}
			username={this.props.user.name}
		/>
	]
}
