import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import { ProgressBar } from 'react-native-paper';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

export default class NewRecipe extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.close}
            onPress={() => navigation.goBack()}
          >
            <Icon name="ios-close" size={30} color="#c4c4c4" />
          </TouchableOpacity>
          <ProgressBar
            progress={0.5}
            color={Colors.mainColor}
            style={styles.progressBar}
          />
          <View style={styles.header}>
            <Text style={styles.title}>New Recipe</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  progressBar: {
    width: '120%',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 72
  },
  close: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: '#EBEDF0',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
