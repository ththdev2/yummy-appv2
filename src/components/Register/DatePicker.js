import React from 'react';
import { View, Text, DatePickerIOS, DatePickerAndroid } from 'react-native';

const DatePicker = ({ value, onDateChange }) => {
  return (
    <DatePickerIOS date={value} onDateChange={date => onDateChange(date)} />
  );
};

export default DatePicker;
