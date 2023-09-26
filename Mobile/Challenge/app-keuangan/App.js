import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import AppNavigation from "./src/navigation/RootNavigator";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import LoadingScreen from "./src/screens/LoadingScreen/LoadingScreen";

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <AppNavigation />
                <LoadingScreen />
                <StatusBar />
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
