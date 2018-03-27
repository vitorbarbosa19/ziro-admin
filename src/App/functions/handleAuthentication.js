import React from 'react'
import netlifyIdentity from 'netlify-identity-widget'

const handleAuthentication = (that) => {
	netlifyIdentity.on('login', ({ id, user_metadata: { full_name: name }, token: { access_token: token } }) => {
		that.setState({ user: { id, name, token } })
		netlifyIdentity.close()
	})
	netlifyIdentity.on('logout', () => {
		that.setState({ user: null })
		netlifyIdentity.close()
	})
	netlifyIdentity.on('error', (error) => {
		that.setState({ user: null })
		console.log('Error on handleAuthentication', error)
	})
	window.netlifyIdentity = netlifyIdentity
	netlifyIdentity.init()
}

export default handleAuthentication
