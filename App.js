/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ActionSheetIOS
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import data from './data.json'
import Communications from 'react-native-communications';
import ActionSheet from 'react-native-actionsheet'
import call from 'react-native-phone-call'

let DataVal = JSON.stringify(data)
DataVal = JSON.parse(DataVal)
//console.log(DataVal)
console.log(DataVal.data.info[0].name)
const args = {
  number: '8625208939', // String value with the number to call
  prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call 
}
const actionsheet = () => {
  return (ActionSheetIOS.showActionSheetWithOptions(
    {
      options: ['Cancel', 'Call Home', 'Call Work'],
      destructiveButtonIndex: 1,
      cancelButtonIndex: 0,
    },
    (buttonIndex) => {
      if (buttonIndex === 1) {
        /* destructive action */
        Communications.phonecall('8625208939', false)
      }
      if (buttonIndex === 2) {
        Communications.phonecall('5512469545', false)
      }
    },
  ))
}
showActionSheet = () => {
  this.ActionSheet.show()
}
const App: () => React$Node = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{ alignItems: 'center' }}>

          <TouchableOpacity onPress={() => Communications.text('8625208939')}>
            <Text style={styles.sectionTitle}>{DataVal.data.info[0].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Communications.email(['nomanmakh@yahoo.com'], null, null, null, 'hello')}>
            <Text style={styles.sectionTitle}>{DataVal.data.info[0].email}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.showActionSheet}>
            <Text style={styles.sectionTitle}>{DataVal.data.info[0].home_ph}</Text>

          </TouchableOpacity>
          <ActionSheet
            ref={o => this.ActionSheet = o}
            title={'Which one do you like ?'}
            options={['Home', 'Work', 'cancel']}
            cancelButtonIndex={2}
            destructiveButtonIndex={2}
            onPress={(buttonIndex) => { 
              if (buttonIndex === 0) {
                /* destructive action */
                Communications.phonecall('862/520-8939', true)
              }
              if (buttonIndex === 1) {
                Communications.phonecall('5512469545', true)
              }
            }}
          />





        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
