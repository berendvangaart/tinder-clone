import {StyleSheet, Text, View} from 'react-native';
import Home from "./screens/Home";
import Login from "./screens/Login";
import Swipe from "./screens/Swipe";
import Onboarding from "./screens/Onboarding";
import ProfileDetail from "./screens/ProfileDetail";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from "react-redux";
import store from "./store/store";
import Match from "./screens/Match";

export default function App() {

    const Stack = createNativeStackNavigator();

    return (
<Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Onboarding" component={Onboarding}/>
                <Stack.Screen name="Profile-detail" component={ProfileDetail}/>
                <Stack.Screen name="Swipe" component={Swipe}/>
                <Stack.Screen name="Match" component={Match}/>
            </Stack.Navigator>
        </NavigationContainer>
 </Provider>

    );
}
