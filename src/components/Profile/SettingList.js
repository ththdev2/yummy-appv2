import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Settings from './Settings';
import textStyles from '../../constants/TextStyles';
import SettingListItem from './SettingListItem';
import Logout from './Logout';

export default class SettingList extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        {Settings.map((item, index) => {
          return (
            <View key={index} style={{ marginBottom: 30 }}>
              <Text style={[textStyles.settingLabel, { marginBottom: 10 }]}>
                {item.label}
              </Text>
              {item.options.map((option, index) => {
                return (
                  <SettingListItem
                    key={index}
                    name={option.name}
                    icon={option.icon}
                    path={option.path}
                    navigation={navigation}
                  />
                );
              })}
            </View>
          );
        })}
        <Logout navigation={navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  index: {
    fontSize: 16,
    color: '#9a9a9a',
    marginBottom: 10
  },
  option: {
    fontSize: 18,
    marginLeft: 20
  }
});
