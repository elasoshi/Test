import React, { Component } from 'react';
import {
  View,
  Text,
  ScrolView,
  Image,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'native-base'

class VerticalView extends Component {

  state = { icon: 'ios-heart-outline', color: 'white', clicked: null}

  onButtonPress(){
    if(this.state.clicked === false) {
      this.setState({ icon: 'ios-heart-outline', color: 'white', clicked: true})
    }else {
      this.setState({ icon: 'ios-heart', color: 'red', clicked: false})
    }

  }


  render() {
    const { container,content, imageStyle, TextStyle,
       cardDetails, cardTitle, cardPrice, starStyle, rating } = styles;
    return (
      <View style={container}>

        <View style={content}>
          <Image style={imageStyle} source={this.props.source}/>
        <View style={cardDetails}>

          <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-start', height: 200, padding: 10}}>
            <Text style={cardTitle}>{this.props.title}</Text>
            <Text style={cardPrice}>{this.props.price}</Text>

          <View style={{ flexDirection: 'row'}}>
              <Icon name='ios-star' style={starStyle} />
            <Icon name='ios-star' style={starStyle} />
          <Icon name='ios-star' style={starStyle} />
              <Icon name='ios-star-half-outline' style={starStyle} />
              <Icon name='ios-star-outline' style={starStyle} />
              <Text style={rating}>{this.props.rating}</Text>
            </View>

          </View>

          <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-end', height: 200, padding: 10}}>
            <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
              <Icon name={this.state.icon} style={{color: this.state.color}} />
            </TouchableOpacity>
          </View>


          </View>

        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    height: 200,
    width: '100%',
    marginTop: 5
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
  },
  cardDetails: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    flexDirection: 'row'
  },
  cardTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500'
  },
   cardPrice : {
     color: 'white',
     fontSize: 10,
     fontWeight: '400'
   },
   starStyle: {
     fontSize: 10,
    color: '#FFDF00'
  },
  rating: {
    fontSize: 10,
    color: 'white',
    marginLeft: 5
  }
}


export default VerticalView;
