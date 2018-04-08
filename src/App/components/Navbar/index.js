import React from 'react'
import Menu from './Menu/index'
import { navbar } from './styles'

const Navbar = (props) => (
	<div style={navbar}>
    { props.user && <Menu {...props} /> }
	</div>
)

export default Navbar