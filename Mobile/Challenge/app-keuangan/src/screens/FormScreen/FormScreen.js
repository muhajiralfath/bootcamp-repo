import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import PATH from "../../navigation/NavigationPath";
import { Button, TextInput } from "@react-native-material/core";
import { Picker } from "@react-native-picker/picker";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { addTransactions } from "../../store/balance/balanceSlice";
import { setIsLoading } from "../../store/app/appSlice";

const FormScreen = ({ navigation, route }) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [transactionType, setTransactionType] = useState("income");
    const dispatch = useDispatch();
    const { balance } = route.params;

    const handleSubmit = () => {
        if (title && amount && date) {
            if (balance < amount && transactionType === "expense") {
                Alert.alert("Your Balance is not enough ");
                return;
            }
            dispatch(setIsLoading(true));
            dispatch(
                addTransactions({
                    title,
                    type: transactionType,
                    amount: parseFloat(amount),
                    date,
                })
            );

            setTimeout(() => {
                navigation.replace(PATH.HOME);
                dispatch(setIsLoading(false));
                setTitle("");
                setAmount("");
                setDate("");
            }, 1000);
        } else {
            Alert.alert("Please fill all input");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.card}>
                    <Picker
                        selectedValue={transactionType}
                        onValueChange={(itemValue) =>
                            setTransactionType(itemValue)
                        }
                    >
                        <Picker.Item label="Income" value="income" />
                        <Picker.Item label="Expense" value="expense" />
                    </Picker>
                    <TextInput
                        variant="outlined"
                        label="Title"
                        style={{ margin: 16 }}
                        value={title}
                        onChangeText={(text) => setTitle(text)}
                        placeholder="Ext. Buy Food"
                    />
                    <TextInput
                        variant="outlined"
                        label="Amount"
                        style={{ margin: 16 }}
                        value={amount}
                        keyboardType="numeric"
                        placeholder="Ext. 100000"
                        onChangeText={(text) => setAmount(text)}
                    />
                    <TextInput
                        variant="outlined"
                        label="Date"
                        style={{ margin: 16 }}
                        value={date}
                        placeholder="Ext. 20 Jan 2023"
                        onChangeText={(text) => setDate(text)}
                    />
                    <Button
                        style={{
                            width: "50%",
                            alignSelf: "center",
                            marginTop: 16,
                        }}
                        variant="outlined"
                        title="Submit"
                        leading={(props) => <Icon name="send" {...props} />}
                        onPress={handleSubmit}
                    />

                    <Button
                        style={{
                            width: "50%",
                            alignSelf: "center",
                            marginTop: 34,
                        }}
                        variant="outlined"
                        title="Back to Home"
                        leading={(props) => (
                            <Icon name="backspace" {...props} />
                        )}
                        onPress={() => navigation.replace(PATH.HOME)}
                    />
                </View>
            </View>
        </View>
    );
};

export default FormScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    formContainer: {
        flex: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        position: "absolute",
        left: 0,
        right: 0,
    },

    card: {
        flex: 1,
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
    btnContainer: {
        padding: 64,
        justifyContent: "flex-end",
    },
});
