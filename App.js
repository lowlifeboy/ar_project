/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, {useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

import {ViroARSceneNavigator} from 'react-viro';

import HelloWorldARScene from './js/HelloWorldSceneAR';
import ChairAndBoxARScene from './js/ChairAndBoxSceneAR';
import CabinetARScene from './js/CabinetARScene';
import TeslaARScene from './js/TeslaARScene';

const UNSET = "UNSET";
const HELLO_WORLD_AR_NAVIGATOR_TYPE = "Hello World AR";
const CHAIR_AND_BOX_AR_NAVIGATOR_TYPE = "Chair and Box AR";
const CABINET_AR_NAVIGATOR_TYPE = "Cabinet AR";
const TESLA_AR_NAVIGATOR_TYPE = "Tesla AR";

const defaultNavigatorType = UNSET;

const App = () => {
  const [navigatorType, setNavigatorType] = useState(defaultNavigatorType);

  const _getExperienceSelector = () => {
    return (
      <View style={localStyles.outer} >
        <View style={localStyles.inner} >

          <Text style={localStyles.titleText}>
            Choose scene:
          </Text>

          <TouchableHighlight
            style={localStyles.buttons}
            onPress={() => _getExperienceButtonOnPress(HELLO_WORLD_AR_NAVIGATOR_TYPE)}
            underlayColor={'#68a0ff'}
          >
            <Text style={localStyles.buttonText}>Hello World AR</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={localStyles.buttons}
            onPress={() => _getExperienceButtonOnPress(CHAIR_AND_BOX_AR_NAVIGATOR_TYPE)}
            underlayColor={'#68a0ff'}
          >
            <Text style={localStyles.buttonText}>Chair an Box AR</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={localStyles.buttons}
            onPress={() => _getExperienceButtonOnPress(CABINET_AR_NAVIGATOR_TYPE)}
            underlayColor={'#68a0ff'}
          >
            <Text style={localStyles.buttonText}>Cabinet AR</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={localStyles.buttons}
            onPress={() => _getExperienceButtonOnPress(TESLA_AR_NAVIGATOR_TYPE)}
            underlayColor={'#68a0ff'}
          >
            <Text style={localStyles.buttonText}>Tesla AR</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  const _getExperienceButtonOnPress = (navigatorType) => {
    setNavigatorType(navigatorType);
  }

  const getScene = (sceneName) => {
    switch (sceneName) {
      case 'helloWorld':
        return <ViroARSceneNavigator initialScene={{scene: HelloWorldARScene}} />
      case 'chairAndBox':
        return <ViroARSceneNavigator initialScene={{scene: ChairAndBoxARScene}} />
      case 'cabinet':
        return <ViroARSceneNavigator initialScene={{scene: CabinetARScene}} />
      case 'tesla':
        return <ViroARSceneNavigator initialScene={{scene: TeslaARScene}} />
    }
  }

  const _getARNavigator = (sceneName) => {
    return getScene(sceneName);
  }

  const _exitViro = () => {
    setNavigatorType(UNSET);
  }

  const getState = () => {
    switch (navigatorType) {
      case UNSET:
        return _getExperienceSelector();
      case HELLO_WORLD_AR_NAVIGATOR_TYPE:
        return _getARNavigator('helloWorld');
      case CHAIR_AND_BOX_AR_NAVIGATOR_TYPE:
        return _getARNavigator('chairAndBox');
      case CABINET_AR_NAVIGATOR_TYPE:
        return _getARNavigator('cabinet');
      case TESLA_AR_NAVIGATOR_TYPE:
        return _getARNavigator('tesla');
      default:
        return _getExperienceSelector();
    }
  }

  return getState();
}

var localStyles = StyleSheet.create({
  viroContainer :{
    flex : 1,
    backgroundColor: "black",
  },
  outer : {
    flex : 1,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: "black",
  },
  inner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: "black",
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color:'#fff',
    textAlign:'center',
    fontSize : 25
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 20
  },
  buttons : {
    height: 80,
    width: 150,
    paddingTop:20,
    paddingBottom:20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  exitButton : {
    height: 50,
    width: 100,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  }
});

export default App;
