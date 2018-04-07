import React from 'react'
import Menu from './Menu/index'
import { navbar } from './styles'

const Navbar = (props) => (
	<div style={navbar}>
    { props.user && <Menu username={props.user.name} /> }
	</div>
)

export default Navbar