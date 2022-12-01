import {StyleSheet, Text, View} from 'react-native';
import Home from "./screens/Home";
import Login from "./screens/Login";
import Swipe from "./screens/Swipe";
import Onboarding from "./screens/Onboarding";
import ProfileDetail from "./screens/ProfileDetail";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


export default function App() {


    const Stack = createNativeStackNavigator();

    return (
        // <View style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={{
                    headerShown: false
                }} >
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="Onboarding" component={Onboarding}/>
                    <Stack.Screen name="Profile-detail" component={ProfileDetail}/>
                    <Stack.Screen name="Swipe" component={Swipe}/>
                </Stack.Navigator>
            </NavigationContainer>
        // </View>
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
