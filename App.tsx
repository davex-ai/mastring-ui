import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import IntroScreen from './app/screens/IntroScreen';
import SvgLogo from '././components/SvgLogo';
import PageTwo from './app/(tabs)/PageTwo';
import PageThree from './app/screens/PageThree';
import Payment from './app/screens/Payment';
import SecondIntroScreen from './app/(tabs)/Second IntroScreen';
import GetStarted from './app/screens/GetStarted';
import Shop from './app/(tabs)/Shop';

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
