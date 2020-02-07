import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BaseContainer } from './BaseContainer.style.js'

//extracting global sass variables and parsing to a js object 
const sassGlobals = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./vars.scss');

class App extends React.Component {
	render() {
		return (
			<ThemeProvider theme={sassGlobals}>
				<BaseContainer>
					<div className="header">Header</div>
					<div className="main">Main</div>
				</BaseContainer>
			</ThemeProvider>
		)
	}
}

export default App;