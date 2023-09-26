import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PATH from "./NavigationPath";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import FormScreen from "../screens/FormScreen/FormScreen";
import ListScreen from "../screens/ListScreen/ListScreen";
import EmpetyListScreen from "../screens/ListScreen/EmpetyListScreen";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={PATH.SPLASH}>
                <Stack.Screen
                    name={PATH.SPLASH}
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={PATH.HOME}
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={PATH.FORM}
                    component={FormScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={PATH.LIST}
                    component={ListScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={PATH.EMPETY}
                    component={EmpetyListScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
