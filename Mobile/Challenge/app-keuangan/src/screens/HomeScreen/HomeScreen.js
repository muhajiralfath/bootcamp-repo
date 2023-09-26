import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import PATH from "../../navigation/NavigationPath";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { setIsLoading } from "../../store/app/appSlice";

const HomeScreen = ({ navigation }) => {
    const [balance, setBalance] = useState(0);
    const transactions = useSelector((state) => state.balance.transactions);
    const dispatch = useDispatch();

    const calculateBalance = () => {
        let balance = 0;
        transactions.forEach((transaction) => {
            if (transaction.type === "income") {
                balance += transaction.amount;
            } else {
                balance -= transaction.amount;
            }
        });
        return balance;
    };

    useEffect(() => {
        let newBalance = calculateBalance();
        setBalance((balance) => (balance += newBalance));
    }, [transactions]);

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <View style={styles.saldo}>
                        <Text style={styles.title}>Total Saldo</Text>
                        <Text style={styles.balance}>
                            {balance > 0 ? balance : "0"}
                        </Text>
                    </View>

                    <View style={{}}>
                        <Button
                            style={{
                                width: "100%",
                                alignSelf: "center",
                                marginTop: 16,
                            }}
                            variant="outlined"
                            title="Add Transaction"
                            leading={(props) => (
                                <Icon name="new-box" {...props} />
                            )}
                            onPress={() =>
                                navigation.replace(PATH.FORM, {
                                    balance: balance,
                                })
                            }
                        />

                        <Button
                            style={{
                                width: "100%",
                                alignSelf: "center",
                                marginTop: 10,
                            }}
                            variant="outlined"
                            title="View History"
                            leading={(props) => (
                                <Icon name="history" {...props} />
                            )}
                            onPress={() => {
                                dispatch(setIsLoading(true));
                                setTimeout(() => {
                                    navigation.replace(PATH.LIST);
                                    dispatch(setIsLoading(false));
                                }, 1000);
                            }}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.btnContainer}></View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardContainer: {
        flex: 4,
        padding: 34,
        justifyContent: "center",
        alignItems: "center",
    },
    btnContainer: {
        flex: 1,
        padding: 30,
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 5,
    },
    card: {
        flex: 1,
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "white",
        borderRadius: 8,
        padding: 16,
        margin: 34,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
    },
    balance: {
        fontSize: 42,
        fontWeight: "bold",
    },
    saldo: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: 8,
        marginBottom: 8,
        backgroundColor: "azure",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
});
