import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import FridgeButton from '../components/Button/FridgeButton';
import Scroll from '../components/Layout/Scroll';
import textStyles from '../constants/TextStyles';

export default class TodayContainer extends Component {
  render() {
    const { navigation } = this.props;
    // const isDarkMode = useDarkMode();
    return (
      <Scroll>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={textStyles.title}>Today</Text>
            <FridgeButton navigation={navigation} />
          </View>
        </View>
      </Scroll>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
