import React from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const styles = StyleSheet.create({  
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height - 50,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
  centerB: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

module.exports = styles;