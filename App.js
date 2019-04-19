
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, Image, TextInput, WebView} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props)
    //取消黄色警告
    console.disableYellowBox = true
    this.state = {
      value: ""
    }
  }
  render() {
    const obj = {
      name: 'kkb'
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Button 
          onPress={() => {alert(123)}}
          title={'按钮'}
        />
        <ActivityIndicator 
          size={"large"}
          // animating={false}
          // hidesWhenStopped={false}
        />
        <Text style={styles.welcome}>React Native!</Text>
        <Image source={require('./public/image/header_logo.png')} />
        <Text style={styles.welcome} 
          ellipsizeMode={'tail'} //head middle
          numberOfLines={1}
          selectable={true}
        >网络图片和base64需要指定宽高网络图片和base64需要指定宽高网络图片和base64需要指定宽高</Text>
        <Image 
          style={{width:100,height:100,borderColor:'#333',borderWidth:2,padding:10}} 
          source={{uri:'https://reactnative.cn/img/header_logo.png'}} />
        <TextInput 
          style={{width:200,height:34,borderWidth:3,borderColor:'red'}} 
          defaultValue={'xxx'}
          autoCapitalize={'none'}
          onChangeText={(text) => {
            this.setState({
              value: text
            })
          }}
        />
        <Text style={styles.welcome}>{this.state.value}</Text>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: '100%',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
