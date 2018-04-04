import React, { Fragment, Component } from 'react'
import { Query } from 'react-apollo'
import Button from '../BasicUI/Button/index'
import Spinner from '../BasicUI/Spinner'
import SvgArrow from '../BasicUI/Arrow/index'
import ALL_PRODUCTS from './queries/ALL_PRODUCTS'

export default class Dashboard extends Component {
	handleLogin = () => netlifyIdentity.open()
	render = () => (
		<Fragment>
			<h1>Dashboard</h1>
			<Spinner />
			<SvgArrow />
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
