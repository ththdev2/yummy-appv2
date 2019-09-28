import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../../constants/Colors';
import textStyles from '../../constants/TextStyles';

export const Filter = () => {
  return (
    <TouchableOpacity>
      <View style={styles.filter}>
        <Icon name="filter" size={18} />
      </View>
    </TouchableOpacity>
  );
};

export const Category = () => {
  return (
    <TouchableOpacity>
      <View style={styles.filter}>
        <Text style={{ fontSize: 16, fontWeight: '500', marginRight: 10 }}>
          Category
        </Text>
        <Icon name="chevron-down" size={18} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  filter: {
    flexDirection: 'row',
    height: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: Colors.gray0,
    marginRight: 20
  }
});
