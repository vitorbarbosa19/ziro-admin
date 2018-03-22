import React from 'react'
import SvgAlert from '../../icons/SvgAlert'
import { container, message } from './styles'

const iconSize = window.innerwidth > 500 ? '45' : '40'

const NotFound = () => (
	<div style={container}>
		<SvgAlert width={iconSize} height={iconSize} />
		<div style={message}>Essa página não existe. Verifique a URL digitada.</div>
	</div>
)

export default NotFound
