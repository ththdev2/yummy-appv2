import React, { Component } from 'react';
import { Text, StyleSheet, View, SafeAreaView } from 'react-native';
import Colors from '../../constants/Colors';
import textStyles from '../../constants/TextStyles';

export default class Login extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
        <View style={styles.container}>
          <Text style={textStyles.medium}>Welcome</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
