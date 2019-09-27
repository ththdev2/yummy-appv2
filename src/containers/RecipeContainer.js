import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions
} from 'react-native';
import Colors from '../constants/Colors';
import textStyles from '../constants/TextStyles';
import i18n from '../I18n/i18n';
import SearchButton from '../components/Button/Search';
import FilterList from '../components/Recipe/FilterList';
import { FilterModal } from '../components/Recipe/FilterModal';

const { width, height } = Dimensions.get('window');

export default class RecipeContainer extends Component {
  constructor() {
    super();

    this.state = {
      modalVisible: false
    };
  }
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentInset={{ bottom: 100 }}
        >
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={textStyles.title}>{i18n.t('Recipe')}</Text>
              <SearchButton navigation={navigation} />
            </View>
            <FilterList parent={this} />
            <FilterModal />
          </View>
        </ScrollView>
        <View style={styles.overlay} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },
  header: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  overlay: {
    position: 'absolute',
    width: width,
    height: height,
    backgroundColor: 'rgba(0,0,0,0.6)',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
