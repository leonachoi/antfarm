/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {PureComponent} from 'react';
import {AppRegistry, StyleSheet, StatusBar} from 'react-native';
import {GameEngine} from 'react-native-game-engine';
import Finger from './src/renderers/Finger';
import TouchArea from './src/renderers/TouchArea';
import {MoveFinger} from './src/systems/MoveFinger';

export default class App extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <GameEngine
        style={styles.container}
        systems={[MoveFinger]}
        entities={{
          0: {renderer: <TouchArea />},
          1: {position: [40, 200], renderer: <Finger />}, //-- Notice that each entity has a unique id (required)
        }}>
        <StatusBar hidden={true} />
      </GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
