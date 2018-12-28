import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlexAlignType,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Get started by opening</Text>
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: "Sobaka"
};

export default HomeScreen