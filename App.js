import { StyleSheet, Text, View } from 'react-native';
import Home from "./screens/Home";
import Login from "./screens/Login";
import Onboarding from "./screens/Onboarding";
import ProfileDetail from "./screens/ProfileDetail";


export default function App() {
  return (
    <View style={styles.container}>
      {/*<Home/>*/}
      {/*<Login/>*/}
      {/*<Onboarding/>*/}
      <ProfileDetail/>

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
