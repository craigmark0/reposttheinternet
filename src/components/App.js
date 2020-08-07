import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BaseContainer } from './BaseContainer.style.js'
import { HeaderComponent } from './header/HeaderComponent';
import {BlogListLayout} from './BlogList/BlogListLayout';

//extracting global sass variables and parsing to a js object 
const sassGlobals = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./vars.scss');

class App extends React.Component {
	render() {
		return (
			<ThemeProvider theme={sassGlobals}>
				<BaseContainer>
					<HeaderComponent />
					<BlogListLayout/>
				</BaseContainer>
			</ThemeProvider>
		)
	}
}

export default App;