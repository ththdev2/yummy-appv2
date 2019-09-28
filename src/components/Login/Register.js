import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';

const Register = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
      <View style={styles.container}>
        <Text style={styles.text}>Create Account</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.graident2
  }
});

export default Register;
