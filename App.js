import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigations/Navigations';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'

export default class App extends React.Component {
  state={
    isFontLoaded:false
  }
  async componentDidMount(){
    await Font.loadAsync({
      'Bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'Regular':require('./assets/fonts/Roboto-Regular.ttf')
    });
    this.setState({isFontLoaded:true})
  }
  render(){
    return (
      (this.state.isFontLoaded === true)?(<AppNavigator/>):(<AppLoading onFinish={()=> this.setState({isFontLoaded:true})}/>)
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
