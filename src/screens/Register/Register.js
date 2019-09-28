import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';
import textStyles from '../../constants/TextStyles';
import Icon from 'react-native-vector-icons/Feather';

export default class Register extends Component {
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
            <Icon
              name="chevron-left"
              size={36}
              color="white"
              onPress={() => navigation.goBack()}
              style={{ position: 'absolute', left: 10 }}
            />
            <Text style={[textStyles.title, { color: 'white' }]}>
              Create Account
            </Text>
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    position: 'relative'
  }
});
