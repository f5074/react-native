import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class MainDItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      children: props.children,
    };
  }

  render() {
    return (
      <View style={styles.sectionContainer}>
        <Text style={[styles.sectionTitle, {color: Colors.black}]}>
          {this.state.title}
        </Text>
        <Text style={[styles.sectionDescription, {color: Colors.black}]}>
          {this.state.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
