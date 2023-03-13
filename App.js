/* eslint-disable react/react-in-jsx-scope */
import {useEffect} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import MainScreen from './src/MainScreen';
import {hideNavigationBar} from 'react-native-navigation-bar-color';

export default function App() {
  useEffect(() => {
    hideNavigationBar();
  });
  return <SafeAreaView style={styles.container}>{<MainScreen />}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    bottom: 20,
  },
});
