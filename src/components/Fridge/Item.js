import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import textStyles from '../../constants/TextStyles';
import Colors from '../../constants/Colors';
import Swipeout from 'react-native-swipeout';
import Icon from 'react-native-vector-icons/Feather';

const swipeButtons = [
  {
    component: (
      <View
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Icon name="trash" size={32} color="white" />
      </View>
    ),
    color: 'white',
    backgroundColor: 'red'
  }
];

export default class Item extends Component {
  render() {
    const { name, category, date } = this.props;
    return (
      <Swipeout right={swipeButtons} backgroundColor="white" autoClose={true}>
        <View style={styles.container}>
          <View>
            <Text style={textStyles.medium}>{name}</Text>
            <Text style={textStyles.small}>{category}</Text>
          </View>
          <Text style={textStyles.small}>{date}</Text>
        </View>
      </Swipeout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 72,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: Colors.lightBorder,
    borderBottomWidth: 1,
    paddingRight: 10,
    marginHorizontal: 20
  },
  swipeButton: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
