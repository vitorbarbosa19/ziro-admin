import React from 'react'
import SvgAlert from '../../icons/SvgAlert'
import { container, message } from './styles'

const iconSize = window.innerwidth > 500 ? '45' : '40'

const ErrorMessage = () => (
	<div style={container}>
		<SvgAlert width={iconSize} height={iconSize} />
		<div style={message}>Um erro interno ocorreu. Tente novamente mais tarde.</div>
	</div>
)

export default ErrorMessage
