/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ScrolView,
  Image
} from 'react-native';

class HorizontalView extends Component {
  render() {
    const { container, content, imageStyle, TextStyle } = styles;
    return (
      <View style={container}>
        <View style={content}>
          <Image style={imageStyle} source={this.props.source}/>
        <Text style={TextStyle}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    height: 100,
    width: 200,
    marginLeft: 5,
  },
  content: {
    flex:1,
    justifyContent: 'center'
  },
  imageStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  TextStyle: {
    position: 'absolute',
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '500',
    color: 'white'
  }
}


export default HorizontalView;
