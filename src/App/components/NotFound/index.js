import React from 'react'
import IconAlert from '../BasicUI/IconAlert'
import { container, iconSize } from './styles'

const NotFound = () => (
	<div style={container}>
		<IconAlert size={iconSize} />
		<div>Essa página não existe. Verifique a URL digitada.</div>
	</div>
)

export default NotFound
