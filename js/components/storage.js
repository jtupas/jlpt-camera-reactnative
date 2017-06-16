import React from 'react';
import {
	Header,
	Container,
	Content,
	Text,
	Button
} from 'native-base';

import RNFS from 'react-native-fs';

import Footer from './footer';

export default React.createClass({
	render() {
		return (
			<Container>
				<Header />
				<Content>
					<Button onPress={this.fetchFiles()}>
						<Text>Test Me</Text>
					</Button>
				</Content>
				<Footer />
			</Container>
		)
	},

	fetchFiles() {
		RNFS.readDir(RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
  			.then((result) => {
    			console.log('GOT RESULT', result);

    			// stat the first file
    			return Promise.all([RNFS.stat(result[0].path), result[0].path]);
  				})
  			.then((statResult) => {
    			if (statResult[0].isFile()) {
      			// if we have a file, read it
      			return RNFS.readFile(statResult[1], 'utf8');
    			}

    		return 'no file';
  			})
  			.then((contents) => {
    			// log the file contents
    			console.log(contents);
  			})
  			.catch((err) => {
    			console.log(err.message, err.code);
  				});
			}
	});