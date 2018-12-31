import appConfig from '../../app.json'

const tintColor = appConfig.expo.primaryColor;

export default {
  tintColor,
  tabIconDefault: '#ccc',
  tabIconSelected: tintColor,
  tabBar: '#fefefe',
  errorBackground: 'red',
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: tintColor,
  noticeText: '#fff', 
  textColor: 'rgba(0,0,0,0.74)',
  hintTextColor: 'rgba(0, 0, 0, 0.54)'
};
