import React, { Component } from 'react';
import { Text, View, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';

const ApplyButton = () => {
  return (
    <TouchableOpacity>
      <View style={styles.applyButton}>
        <Text style={{ fontSize: 18, fontWeight: '500', color: 'white' }}>
          Apply
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const FilterModal = () => {
  return (
    <Modal transparent={true} visible={true} animationType="slide">
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
            Country
          </Text>
          <ApplyButton />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse'
  },
  modal: {
    width: '100%',
    height: 400,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 20,
    paddingHorizontal: 20
  },
  applyButton: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    backgroundColor: Colors.tint,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
