import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import PATH from "../../navigation/NavigationPath";
import { Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import EmpetyListScreen from "./EmpetyListScreen";

const ListScreen = ({ navigation }) => {
    const transactions = useSelector((state) => state.balance.transactions);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Transaction History{" "}
                <Icon style={{ width: 20 }} name="history" />{" "}
            </Text>
            <FlatList
                data={transactions}
                renderItem={({ item }) => (
                    <View
                        style={[
                            styles.transactionItem,
                            item.type === "income"
                                ? { backgroundColor: "green" }
                                : { backgroundColor: "red" },
                        ]}
                    >
                        <View>
                            <Text style={styles.type}>
                                {item.type.toUpperCase()}
                            </Text>
                            <Text style={{ color: "white" }}>{item.title}</Text>
                            <Text style={styles.date}>{item.date}</Text>
                        </View>

                        <Text style={styles.amount}>
                            {item.type === "income" ? "+" : "-"} Rp.
                            {item.amount}
                        </Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                ListEmptyComponent={() => <EmpetyListScreen />}
            />
            <View>
                <Button
                    style={{
                        width: "50%",
                        alignSelf: "center",
                        marginTop: 34,
                    }}
                    variant="outlined"
                    title="Back to Home"
                    leading={(props) => <Icon name="backspace" {...props} />}
                    onPress={() => navigation.replace(PATH.HOME)}
                />
            </View>
        </View>
    );
};

export default ListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    title: {
        fontSize: 24,
        color: "black",
        fontWeight: "bold",
        marginBottom: 12,
    },
    type: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
    },
    amount: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        marginRight: 12,
    },
    date: {
        fontSize: 12,
        color: "white",
        fontStyle: "italic",
        marginTop: 12,
    },
    transactionItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: 8,
        marginBottom: 8,
        backgroundColor: "white",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
});
