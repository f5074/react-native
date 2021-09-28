import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

export default class LessonHScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{this.props.route.name}</Text>
        <Button
          title="Go Details"
          onPress={() => this.props.navigation.navigate('LessonD')}
        />
      </View>
    );
  }
}
