import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { useDarkModeContext } from 'react-native-dark-mode';
import FridgeButton from '../components/Button/FridgeButton';

export default class TodayContainer extends Component {
  render() {
    const { navigation } = this.props;
    // const isDarkMode = useDarkMode();
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentInset={{ bottom: 100 }}
        >
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.title}>Today</Text>
              <FridgeButton navigation={navigation} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
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
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'SFProDisplay-Bold'
  }
});
