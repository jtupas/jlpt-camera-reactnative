import strings from '../resources/strings';

export default function reducer(state={

	imagePaths: []

	} , action) {

		switch(action.type) {
			case strings.action_fetch_images: 
				return {...state, imagePaths: action.payload}
				break;
		}
		return state;
};