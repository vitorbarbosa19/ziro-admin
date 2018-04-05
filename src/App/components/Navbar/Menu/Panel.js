import React from 'react'
import { panelIsOpen, panel } from './styles'

const Panel = (props) => (
	<div style={props.menuIsOpen ? panelIsOpen : panel}>
		<ul>
			<li>
				Item
			</li>
			<li>
				Item
			</li>
			<li>
				Item
			</li>
		</ul>
	</div>
)

export default Panel
