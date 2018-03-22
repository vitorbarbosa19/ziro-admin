import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App/index'

render(
	<BrowserRouter>
		<Route component={App} />
	</BrowserRouter>,
	document.getElementById('app')
)