import React from 'react'
import IconMenu from '../BasicUI/IconMenu'
import { navbar } from './styles'

const Navbar = (props) => (
	<div style={navbar}>
    { props.user
    	? <IconMenu />
    	: <div></div>
    }
	</div>
)

export default Navbar