import React from 'react';
import {
	Container,
	Content,
	Text,
	Header,
} from 'native-base';

import Camera from './camera';  
import Footer from './footer';
import Styles from '../resources/style';

export default React.createClass({
	render() {
		return (
			<Container>
				<Header />
				<Camera />
				<Footer />
			</Container>
		)
	}
});