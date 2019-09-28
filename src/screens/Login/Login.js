import React, { Component } from 'react';
import { Text, StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';
import textStyles from '../../constants/TextStyles';
import Logo from '../../../assets/logo.svg';
import Google from '../../components/Login/Google';
import Register from '../../components/Login/Register';

export default class Login extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <LinearGradient
        colors={[Colors.gradient1, Colors.gradient2, Colors.gradient3]}
        style={{ flex: 1 }}
      >
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
          <View style={styles.container}>
            <View>
              <Logo width={100} height={100} />
              <Text
                style={[textStyles.title, { color: 'white', marginTop: 70 }]}
              >
                Welcome to{'\n'}
                Yummy
              </Text>
            </View>
            <View>
              <Google navigation={navigation} />
              <Register navigation={navigation} />
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 20,
    justifyContent: 'space-between'
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
