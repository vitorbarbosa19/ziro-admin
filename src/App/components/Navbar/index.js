import React from 'react'
import SvgMenu from '../BasicUI/SvgMenu'
import { navbar } from './styles'

const Navbar = (props) => (
	<div style={navbar}>
    { props.user
    	? <SvgMenu />
    	: <div></div>
    }
	</div>
)

export default Navbar