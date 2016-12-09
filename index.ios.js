/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView 

} from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
        <Text>{display}</Text>
    );
  }
}

class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    );
  }
}

class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <Text>FixedDimensionsBasics</Text>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

class FlexDimensionsBasics extends Component {
  render() {
    return (
      <View style={{width: 400, height: 200, flexDirection: 'column'}}>
        <Text>Flex</Text>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
          <View style={{width: 50, height: 50, flex: 1, backgroundColor: 'red'}} />
          <View style={{width: 50, height: 50, flex: 1, backgroundColor: 'yellow'}} />
          <View style={{width: 50, height: 50, flex: 1, backgroundColor: 'blue'}} />
          <View style={{width: 50, height: 50, flex: 2, backgroundColor: 'pink'}} />
        </View>
      </View>
    );
  }
};


export default class AwesomeProject extends Component {
  render() {

    let name = "hello world!";
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <ScrollView>
        <FlexDimensionsBasics />
        <FixedDimensionsBasics />
        <LotsOfStyles />
        <Blink text={"Blink......"} />
        <Blink text={"Blink......@@@@@......."} />
        <Greeting name={name} />
        <Greeting name={"test2"} />
        <Greeting name={"test3"} />
        <Greeting name={"test4"} />

        <Image source={pic} style={{width: 193, height: 110}}/>

        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
