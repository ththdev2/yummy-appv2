import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';

export default class SettingList extends Component {
  render() {
    const { navigation } = this.props;
    const settings = [
      {
        index: 'Account',
        options: [
          { name: 'Account' },
          { name: 'State' },
          { name: 'Notification' }
        ]
      },
      {
        index: 'Recipe',
        options: [{ name: 'Recipe Register', navigate: 'NewRecipe' }]
      },
      {
        index: 'Recommendation',
        options: [{ name: 'Invite your friends' }]
      },
      {
        index: 'Tool',
        options: [{ name: 'Siri Shortcut' }]
      },
      {
        index: 'Support',
        options: [{ name: 'Help' }, { name: 'Feedbacks' }]
      },
      {
        index: 'Terms',
        options: [{ name: 'Terms of Service' }]
      },
      {
        index: '',
        options: [{ name: 'Logout' }]
      }
    ];
    return (
      <View>
        {settings.map((item, index) => {
          return (
            <View key={index} style={{ marginBottom: 30 }}>
              <Text style={styles.index}>{item.index}</Text>
              {item.options.map((option, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => navigation.navigate(option.navigate)}
                  >
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        height: 50,
                        borderBottomWidth: 1,
                        borderBottomColor: '#f2f2f2'
                      }}
                    >
                      <Icon
                        name="ios-help-circle-outline"
                        size={30}
                        color={Colors.mainColor}
                      />
                      <Text style={styles.option}>{option.name}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        })}
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
