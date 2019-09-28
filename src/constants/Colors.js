const darkmode = false;
const devMode = true;

const tint = '#037986',
  gray0 = '#f2f2f2',
  gray1 = '#c4c4c4',
  gray2 = '#464848',
  yellow = '#FEB800';
export default {
  tint,
  gray0,
  gray1,
  gray2,
  yellow,
  tabIconSelected: tint,
  tabIconDefault: gray1,
  background: darkmode ? 'black' : 'white',
  gradient1: devMode ? '#4c669f' : '#f59f00',
  graident2: devMode ? '#3b5998' : '#feb800',
  gradient3: devMode ? '#3b5998' : '#ffa400'
};
