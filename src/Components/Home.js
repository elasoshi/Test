/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from 'react-native';

import HorizontalView from './HorizontalView'
import Field from '../Images/field.jpg'
import Indoor from '../Images/indoor.jpg'
import Water from '../Images/water.jpg'
import Jog from '../Images/jog.jpg'
import Sky from '../Images/skydiving.jpg'
import Horse from '../Images/horse.jpeg'
import Cycle from '../Images/cycle.jpg'
import VerticalView from './VerticalView'

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <ScrollView
            scrollEventThrottle={16}
            >
              <View style={styles.horizontalContainer}>
                <ScrollView
                  horizontal={true}
                  >
                  <HorizontalView title={'Field'} source={Field}/>
                  <HorizontalView title={'Indoor'} source={Indoor}/>
                  <HorizontalView title={'Water'} source={Water}/>
                  <HorizontalView title={'Field'} source={Field}/>
                  <HorizontalView  title={'Field'} source={Field}/>
              </ScrollView>
              </View>
              <View style={styles.vertical}>
                <VerticalView title={'Sky Diving'} source={Sky} price={'180 KWD . outdoor'} rating={'30'}/>
                <VerticalView title={'Running'} source={Jog} price={'10 KWD . outdoor'} rating={'25'}/>
                <VerticalView title={'Horse Riding'} source={Horse} price={'60 KWD . outdoor'} rating={'40'}/>
                <VerticalView title={'Bicycle Trip'} source={Cycle} price={'80 KWD . outdoor'} rating={'1000'}/>
                <VerticalView title={'Swimmming'} source={Water} price={'80 KWD . indoor'} rating={'24'}/>
              </View>

          </ScrollView>

        </View>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontalContainer: {
    height: 100,
    marginTop: 5
  },
  vertical: {
    width: '100%',

  }
});
