import strings from '../resources/strings';

import RNFS from 'react-native-fs';

export function fetchImages() {
	return function (dispatch) {
		RNFS.readDir(RNFS.DocumentDirectoryPath) 
  			.then((result) => {

    			var filenames = []
    			for (let index=0; index < result.length; index++) {
    				filenames.push(result[index].name)
    			}

    			dispatch({type: strings.action_fetch_images, payload: filenames})

  				})
  			.catch((err) => {
    			console.log(err.message, err.code);
  			});
	}
}