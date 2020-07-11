 
import React, {Component} from 'react';
import io from 'socket.io-client';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


class App extends Component {

  componentDidMount() {
   const socket =  io('http://192.168.1.182:5000');
  }
  render() {
    return <SafeAreaView>

      <View>
        <Text>React Native App</Text>
      </View>
    </SafeAreaView>
  }
}

export default App;