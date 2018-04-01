import React, { Fragment, Component } from 'react'
import { Query } from 'react-apollo'
import ALL_PRODUCTS from './queries/ALL_PRODUCTS'

export default class Dashboard extends Component {
	handleLogin = () => netlifyIdentity.open()
	render = () => (
		<Fragment>
			<div>Dashboard</div>
			<button onClick={this.handleLogin}>
				Logout
			</button>
			<Query query={ALL_PRODUCTS}>
				{
					({ loading, error, data }) => {
						console.log(data)
						if (loading) return <p>Loading...</p>
						if (error) return <p>Error</p>
						return <div>Data OK</div>
					}
				}
			</Query>
		</Fragment>
	)
}
