import React from 'react'
import SvgAlert from '../../icons/SvgAlert'
import { container, iconSize } from './styles'

const NotFound = () => (
	<div style={container}>
		<SvgAlert width={iconSize} height={iconSize} />
		<div>Essa página não existe. Verifique a URL digitada.</div>
	</div>
)

export default NotFound
