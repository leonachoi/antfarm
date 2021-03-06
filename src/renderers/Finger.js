import React, {PureComponent} from 'react';
import {StyleSheet, View} from 'react-native';

const RADIUS = 20;

export default class Finger extends PureComponent {
  render() {
    const x = this.props.position[0] - RADIUS / 2;
    const y = this.props.position[1] - RADIUS / 2;
    return <View style={[styles.finger, {left: x, top: y}]} />;
  }
}

const styles = StyleSheet.create({
  finger: {
    borderColor: '#CCC',
    borderWidth: 4,
    // borderRadius: RADIUS * 2,
    transform: [{rotate: '45deg'}],
    width: RADIUS * 2,
    height: RADIUS * 2,
    backgroundColor: '#cbe3b1',
    position: 'absolute',
  },
});
