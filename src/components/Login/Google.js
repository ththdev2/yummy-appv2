import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/Ionicons';

function handlePress() {
  alert('Google Login');
}

const Google = () => {
  // Google Login
  return (
    <TouchableOpacity onPress={() => handlePress()}>
      <View style={styles.container}>
        <View style={styles.icon}>
          <Icon name="logo-google" size={24} color="white" />
        </View>
        <Text style={styles.text}>Login with Google</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  icon: {
    position: 'absolute',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    left: 10
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default Google;
