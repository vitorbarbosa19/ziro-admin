import React, { Component } from 'react'
import { Query } from 'react-apollo'
import Spinner from '../BasicUI/Spinner/index'
import Arrow from '../BasicUI/Arrow/index'
import ALL_PRODUCTS from './queries/ALL_PRODUCTS'

export default class Dashboard extends Component {
	render = () => (
		<Query query={ALL_PRODUCTS}>
			{
				({ loading, error, data: { allProducts } }) => {
					console.log(allProducts)
					if (loading)
						return <div><Spinner /><p>Carregando marcas...</p></div>
					if (error)
						return <p>Error</p>
					return allProducts.map( ({ referencia, descricao, preco }) => (
						<div key={referencia}>{referencia} | {descricao} | {preco}</div>
					))
				}
			}
		</Query>
	)
}
