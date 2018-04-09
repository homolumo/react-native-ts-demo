import { Button, Popover, Toast } from 'antd-mobile';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
});

interface IProps {
  test: string;
}

interface IState {
  result: string;
}

export default class App extends React.Component<IProps, IState> {
  // public static getDerivedStateFromProps(
  //   nextProps: Readonly<IProps>,
  //   prevState: IState,
  // ): Partial<IState> | null {

  // }

  public componentDidMount() {

    fetch('https://test.ejiaoji.com/appjiaoji/api/index/list').then((r) => {
      r.json().then((json) => {
        console.log(json);
        Toast.info('ok', 1.5);
      });
    });
  }

  public render() {
    const pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Image source={pic} style={{ width: 193, height: 110 }} />
        <Button type="primary">Click me!</Button>
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
