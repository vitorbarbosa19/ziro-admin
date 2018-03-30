import React, { Component } from 'react'
import { Image } from 'cloudinary-react'
import { container } from './styles'

export default class Login extends Component {
	handleLogin = () => netlifyIdentity.open()
	render = () => (
		<div style={container}>
			<Image
	        cloudName='ziro'
	        width={window.innerWidth > 500 ? '125' : '80'}
	        publicId='admin-login_kqdehd'
	        version='1522375212'
	        format='png'
	        secure='true'
	   	/>
			<div>Faça login para ter acesso ao dashboard de marcas</div>
			<button onClick={this.handleLogin}>
				Login
			</button>
		</div>
	)
}