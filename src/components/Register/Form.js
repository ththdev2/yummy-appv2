import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';
import Input from './Input';
import DatePicker from './DatePicker';

const Form = ({ name, birth, email, password, onChange }) => {
  return (
    <View style={styles.container}>
      <Input name="name" value={name} label="Name" onChange={onChange} />
      <Input
        name="birth"
        value={birth}
        label="Date of Birth"
        onChange={onChange}
      />
      <Input name="email" value={email} label="Email" onChange={onChange} />
      <Input
        name="password"
        value={password}
        label="Password"
        onChange={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column-reverse'
  }
});

export default inject(({ register }) => ({
  name: register.name,
  birth: register.birth,
  email: register.email,
  password: register.password,
  step: register.step,
  onChange: register.onChange
}))(observer(Form));
