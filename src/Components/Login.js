/* @flow */

import React, { Component } from 'react';
import { View } from 'react-native'
import { Header, Content, Button, Text, Icon } from 'native-base';
import Video from 'react-native-video';

export default class Login extends Component {
  render() {
    const { videoStyle, ButtonStyle, ContentStyle, ButtonView } = styles
    return (
      <View style={ContentStyle}>
        <Video
          source={require('../Video/complete.mp4')}
          rate={1.0}
          volume={1.0}
          muted={true}
          resizeMode={"cover"}
          repeat
          style={videoStyle}
        />
      <View style={ButtonView}>
          <Button style={ButtonStyle}  bordered light>
            <Icon type="FontAwesome" name="google" />
            <Text>Login with Google</Text>
          </Button>
          <Button iconLeft block>
            <Icon type="FontAwesome" name="facebook" />
            <Text>Login with facebook</Text>
          </Button>
          <Button style={{ alignSelf: 'center'}} transparent light>
            <Text>Continues</Text>
          </Button>
        </View>

      </View>
    );
  }
}


const styles = {
  videoStyle: {
    width: '150%',
    height: '100%',
    position: 'absolute',


  },
  ButtonStyle: {
    width: '100%',
    bottom: '5%',
    justifyContent: 'center'

  },

  ContentStyle: {
    height: '100%',

  },
  ButtonView : {
    padding: '10%',
    height: '100%',
    justifyContent: 'flex-end',
  }

}
