import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleButtonPress = (text) => {
        if (text === "=") {
            try {
                setResult(eval(input).toString());
            } catch (error) {
                setResult("Error");
            }
        } else if (text === "AC") {
            setInput("");
            setResult("");
        } else if (text === "DEL") {
            setInput(input.slice(0, -1));
        } else if (text === "00") {
            setInput(input + "00");
        } else {
            setInput(input + text);
        }
    };

    const renderButtons = () => {
        const buttons = [
            ["DEL", "AC"],
            ["7", "8", "9", "/"],
            ["4", "5", "6", "*"],
            ["1", "2", "3", "-"],
            ["00", "0", "=", "+"],
        ];

        return buttons.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
                {row.map((buttonText, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.button}
                        onPress={() => handleButtonPress(buttonText)}
                    >
                        <Text
                            style={[
                                styles.buttonText,
                                buttonText === "AC" || buttonText === "DEL"
                                    ? { color: "red" }
                                    : { color: "white" },
                            ]}
                        >
                            {buttonText}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        ));
    };

    return (
        <View style={styles.container}>
            <View style={styles.resultContainer}>
                <Text style={styles.inputText}>{input}</Text>
                <Text style={styles.resultText}>{result}</Text>
            </View>
            <View style={styles.buttonContainer}>{renderButtons()}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    resultContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "flex-end",
        backgroundColor: "black",
        padding: 10,
    },
    inputText: {
        fontSize: 30,
        color: "white",
    },
    resultText: {
        fontSize: 24,
        marginTop: 10,
        color: "white",
    },
    buttonContainer: {
        flex: 3,
        backgroundColor: "black",
    },
    row: {
        flex: 1,
        flexDirection: "row",
    },
    button: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 30,
        color: "white",
    },
});
