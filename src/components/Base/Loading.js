import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator
} from 'react-native-indicators';

export default class Loading extends Component {
  render() {
    return <DotIndicator color="black" />;
  }
}

const styles = StyleSheet.create({});
