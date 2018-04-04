import React, { Fragment, Component } from 'react'
import { Query } from 'react-apollo'
import Button from '../Button/index'
import Spinner from '../../icons/Spinner'
import ALL_PRODUCTS from './queries/ALL_PRODUCTS'

export default class Dashboard extends Component {
	handleLogin = () => netlifyIdentity.open()
	render = () => (
		<Fragment>
			<h1>Dashboard</h1>
			<Spinner />
			<Button onClick={this.handleLogin} text='Logout' />
			<Query query={ALL_PRODUCTS}>
				{
					({ loading, error, data: { allProducts } }) => {
						console.log(allProducts)
						if (loading)
							return <p>Loading...</p>
						if (error)
							return <p>Error</p>
						return allProducts.map( ({ referencia, descricao, preco }, index) => (
							<div key={index}>{referencia} | {descricao} | {preco}</div>
						))
					}
				}
			</Query>
		</Fragment>
	)
}
