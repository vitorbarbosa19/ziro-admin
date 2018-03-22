import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Webfont from 'webfontloader'
import App from './App/index'
import './index.css'

Webfont.load({ google: { families: [
	'Work Sans: 400,700',
	'Hind Vadodara: 400,700'
]}})

render(
	<BrowserRouter>
		<Route component={App} />
	</BrowserRouter>,
	document.getElementById('app')
)