import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import Colors from '../../constants/Colors';
import textStyles from '../../constants/TextStyles';
import Icon from 'react-native-vector-icons/Feather';

import CardStackHeader from '../../components/Header/CardStackHeader';
import FormTemplate from '../../components/Register/FormTemplate';
import SubmitButton from '../../components/Register/SubmitButton';
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
        <FormTemplate />
        <SubmitButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});
