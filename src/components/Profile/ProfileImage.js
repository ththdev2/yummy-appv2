import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { inject, observer } from 'mobx-react';

@inject('userStore')
@observer
export default class ProfileImage extends Component {
  render() {
    const { userStore } = this.props;
    return (
      <View style={styles.container}>
        {userStore.photoUrl == '' ? null : (
          <Image source={{ uri: userStore.photoUrl }} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: '#c4c4c4'
  }
});
