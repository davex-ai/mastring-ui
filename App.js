import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import IntroScreen from './src/screens/IntroScreen';
import SvgLogo from './src/components/SvgLogo';
import PageTwo from './src/screens/PageTwo';
import PageThree from './src/screens/PageThree';
import Page from './src/screens/Page';

export default function App() {
  return (
    <View style={styles.container}>
      <Page /> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
