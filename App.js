import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import IntroScreen from './src/screens/IntroScreen';
import SvgLogo from './src/components/SvgLogo';
import PageTwo from './src/screens/PageTwo';
import PageThree from './src/screens/PageThree';
import Payment from './src/screens/Payment';
import SecondIntroScreen from './src/screens/Second IntroScreen';
import GetStarted from './src/screens/GetStarted';
import Shop from './src/screens/Shop';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Shop />  */}
      {/* <IntroScreen/> */}
      {/* <PageThree/> */}
      {/* <PageTwo/> */}
      {/* <Payment/> */}
      {/* <SecondIntroScreen/> */}
      <GetStarted/>
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
