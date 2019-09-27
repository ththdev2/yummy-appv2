import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';
import textStyles from '../../constants/TextStyles';
import i18n from '../../I18n/i18n';

export default class Logout extends Component {
  logout = () => {
    alert('Logout');
  };
  render() {
    return (
      <TouchableOpacity onPress={() => this.logout()}>
        <View style={styles.container}>
          <Text style={[textStyles.medium, { color: Colors.tint }]}>
            {i18n.t('Logout')}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray
  }
});
