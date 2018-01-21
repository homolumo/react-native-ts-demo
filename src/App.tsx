import * as React from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
});

export default class App extends React.Component<{}> {
  public render() {
    const pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    };
    fetch('https://test.ejiaoji.com/appjiaoji/api/index/list').then((r) => {
      r.json().then((json) => {
        console.log(json);
      });
    });
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Image source={pic} style={{ width: 193, height: 110 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});
