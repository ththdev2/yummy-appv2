import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Scroll from '../components/Layout/Scroll';
import textStyles from '../constants/TextStyles';
import i18n from '../I18n/i18n';

export default class LikedContainer extends Component {
  render() {
    return (
      <Scroll>
        <View style={styles.container}>
          <Text style={textStyles.title}>{i18n.t('Liked')}</Text>
        </View>
      </Scroll>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20
  }
});
