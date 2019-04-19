import React, {Component} from 'react';
import { StyleSheet, View, Text , WebView} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props)
    //取消黄色警告
    console.disableYellowBox = true
  }
  render() {
    return <WebView style={{width:'100%',height:'100%'}} source={{uri: 'https://baidu.com'}} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: '100%',
  }
});
