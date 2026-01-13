import React from 'react';
import { View, StyleSheet } from 'react-native';

const Separator = () => <View style={styles.line} />;

const styles = StyleSheet.create({
  line: {
    height: 1,
    width: '90%',
    backgroundColor: '#E4E6E8',
    marginVertical: 10,
    marginHorizontal: 'auto'
  },
});

export default Separator;
