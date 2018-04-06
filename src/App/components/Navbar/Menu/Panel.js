import React from 'react'
import IconClose from '../../BasicUI/IconClose'
import { panelIsOpen, panel } from './styles'

const Panel = (props) => (
	<div style={props.menuIsOpen ? panelIsOpen : panel}>
		<IconClose onClick={props.onClick} />
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
