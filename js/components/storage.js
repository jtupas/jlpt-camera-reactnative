import React from 'react';
import {
	Header,
	Container,
	Content,
	Text,
	Button,
	List,
	ListItem,
	Left,
	Body,
	Thumbnail
} from 'native-base';

import RNFS from 'react-native-fs';
import { connect } from 'react-redux';
import { fetchImages } from '../actions/imageActions';

import Footer from './footer';

var Storage = React.createClass({

	componentWillMount() {
		this.props.fetch();
	},

	render() {
		return (
			<Container>
				<Header />
				<List 	dataArray={this.props.imageList}
						renderRow={(item) => 
						<ListItem>
                            	<Thumbnail square 
                            		size={80} 
                            		source={{uri: 'file://' + RNFS.DocumentDirectoryPath + '/' + item}} />
                       		<Body>
								<Text>{item}</Text>
							</Body>
						</ListItem> }
					>
				</List>
				<Footer />
			</Container>
		)
	}
});

const mapStateToProps = state => ({
	imageList: state.image.imagePaths
});

const mapDispatchToProps = dispatch => ({
	fetch: () => dispatch(fetchImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Storage); 
