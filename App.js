import { StyleSheet, Text, View } from 'react-native';
import Home from "./screens/Home";
import Login from "./screens/Login";


export default function App() {
  return (
    <View style={styles.container}>
      {/*<Home/>*/}
      <Login/>

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
