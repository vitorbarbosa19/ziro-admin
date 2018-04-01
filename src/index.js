import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Webfont from 'webfontloader'
import App from './App/index'
import './index.css'

Webfont.load({ google: { families: ['Work Sans: 400,700', 'Hind Vadodara: 400,700'] } })

render(
	<ApolloProvider client={new ApolloClient({ uri: process.env.GRAPHQL_ENDPOINT })}>
		<BrowserRouter>
			<Route component={App} />
		</BrowserRouter>
	</ApolloProvider>,
	document.getElementById('app')
)