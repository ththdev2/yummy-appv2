import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../../constants/Colors';
import textStyles from '../../constants/TextStyles';
import i18n from '../../I18n/i18n';

export default class SettingListItem extends Component {
  render() {
    const { name, icon, path, navigation } = this.props;
    return (
      <TouchableOpacity onPress={() => navigation.navigate(path)}>
        <View style={styles.container}>
          <Icon
            name={icon ? icon : 'alert-octagon'}
            size={24}
            style={styles.icon}
            color={Colors.tint}
          />
          <Text style={textStyles.medium}>{i18n.t(name)}</Text>
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
    borderBottomColor: Colors.gray50
  },
  icon: {
    marginRight: 20
  }
});
