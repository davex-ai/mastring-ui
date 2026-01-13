import React from 'react';
import { View, StyleSheet } from 'react-native';

const Separator = () => <View style={styles.line} />;

const styles = StyleSheet.create({
  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#CED0CE',
    marginVertical: 10,
  },
});

export default Separator;
