import React, {PureComponent} from 'react';
import {StyleSheet, View} from 'react-native';

export default class TouchArea extends PureComponent {
  render() {
    return <View style={[styles.touchArea]} />;
  }
}

const styles = StyleSheet.create({
  touchArea: {
    borderColor: '#CCC',
    borderWidth: 4,
    // borderRadius: RADIUS * 2,
    // transform: [{rotate: '45deg'}],
    width: '100%',
    height: '50%',
    backgroundColor: 'pink',
    position: 'absolute',
  },
});
