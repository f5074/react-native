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
import {Dimensions} from 'react-native';

import {FlatList} from 'react-native-gesture-handler';
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

export default class LessonHScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{this.props.route.name}</Text>
        <Button
          title="Go Details"
          onPress={() => this.props.navigation.navigate('MainD')}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 15}}
          data={null}
          numColumns={2}
          renderItem={({item, index}) => {
            return null;
            // return <LessonHomeItem {...item} />;
          }}
          ListEmptyComponent={() => {
            return (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={[{marginTop: (SCREEN_HEIGHT - 350) / 2}]}>
                  데이터가 존재하지 않습니다.
                </Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={() => this.getLessonList(false)}
          onEndReachedThreshold={0.1}
        />
      </View>
    );
  }
}
