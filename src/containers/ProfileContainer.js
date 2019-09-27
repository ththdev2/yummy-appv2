import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from 'react-native';
import { inject, observer } from 'mobx-react';
import ProfileImage from '../components/Profile/ProfileImage';
import SettingList from '../components/Profile/SettingList';
import textStyles from '../constants/TextStyles';

@inject('userStore')
@observer
export default class ProfileContainer extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { userStore, navigation } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentInset={{ bottom: 100 }}
        >
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={textStyles.title}>{userStore.name}</Text>
              <ProfileImage />
            </View>
            <SettingList navigation={navigation} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  details: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#037986',
    marginTop: 5
  }
});
