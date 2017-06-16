import React from 'react';
import {
	Container,
	Content,
	Icon,
	Body,
	Button,
} from 'native-base';



import Camera from 'react-native-camera';  
import Styles from '../resources/style';

export default React.createClass({
	render() {
		return (
			<Container>
				<Camera
          			ref={(cam) => {
            				this.camera = cam;
          					}}
          			captureTarget={Camera.constants.CaptureTarget.disk}
          			style={Styles.preview}
          			aspect={Camera.constants.Aspect.fill}>
                	<Button style={{ alignSelf: 'center', marginBottom: 10}} 
                			onPress={() => this.createFile()}>
          				<Icon name="ios-camera" />
          			</Button>
        		</Camera>
        	</Container>
		)
	},

	createFile() {
		/*
		var path = RNFS.DocumentDirectoryPath + '/test1.txt';
		console.log(path);
		RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
  			.then((success) => {
    			console.log('FILE WRITTEN!');
  			})
  			.catch((err) => {
    			console.log(err.message);
  			});
  		*/
  		const options = {};
    		//options.location = ...
    	this.camera.capture({metadata: options})
      		.then((data) => console.log(data))
      		.catch(err => console.error(err));
	}
});