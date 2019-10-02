import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import Colors from '../../constants/Colors';
import textStyles from '../../constants/TextStyles';
import Icon from 'react-native-vector-icons/Feather';

import CardStackHeader from '../../components/Header/CardStackHeader';
import KeyboardAccessoryButton from '../../components/Button/KeyboardAccessoryButton';
import Form from '../../components/Register/Form';

export default class Register extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        {/* Header */}
        <CardStackHeader
          left={
            <Icon
              name="chevron-left"
              size={36}
              onPress={() => navigation.goBack()}
            />
          }
        />

        {/* Main */}
        <ScrollView style={styles.content}>
          <View style={styles.titleView}>
            <Text style={textStyles.compact}>What's your name?</Text>
          </View>
          <Form />
        </ScrollView>

        <KeyboardAccessoryButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    width: '100%',
    height: 104,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    marginBottom: 30
  },
  content: {
    paddingHorizontal: 20
  },
  titleView: {
    marginBottom: 30
  }
});
