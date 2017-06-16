import React from 'react';
import {
	Router,
	Scene
} from 'react-native-router-flux';

import Home from './components/home';
import Storage from './components/storage';

export default React.createClass({
	render() {
		return (
			<Router>
				<Scene key="root">
					<Scene key="home"
						   title="My Camera"
						   component={Home}
						   initial />
					<Scene	key="storage"
							title="My Files"
							component={Storage} />
				</Scene>
			</Router>
		)
	}
});