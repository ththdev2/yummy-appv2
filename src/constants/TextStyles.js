import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const textStyles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black'
  },
  medium: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black'
  },
  small: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.gray00
  },
  summaryLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.gray00,
    marginBottom: 10
  },
  settingLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.gray00
  }
});

export default textStyles;
