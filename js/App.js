import React, { Component } from 'react';
import AppNavigator from './AppNavigator';
import { Provider } from 'react-redux';
import store from './Store';

export default React.createClass({

	render() {
		return (
			<Provider store={store}>
				<AppNavigator />
			</Provider>
		)
	}
});

