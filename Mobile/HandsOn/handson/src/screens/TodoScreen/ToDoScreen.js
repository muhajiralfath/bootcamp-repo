import { Text, View, TextInput, Button, Alert } from "react-native";
import { useEffect, useState } from "react";
import React from "react";

import styles from "./ToDoScreen.style";
import TabBar from "./components/TabBar";
import ToDoList from "./components/ToDoList";
import Input from "../../shared/components/Input";
import SubmitButton from "../../shared/components/SubmitButton";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setTodoName, setTodos } from "../../store/todo/ToDoAction";
import { showLoading } from "../../store/AppAction";

export default function ToDoScreen({ todo }) {
    const { onLoadTodo } = todo();

    const dispatch = useDispatch();

    const loadDataTodo = async () => {
        const todos = await onLoadTodo();
        dispatch(setTodos(todos.data.data));
    };

    useEffect(() => {
        loadDataTodo();
    }, []);

    const submitTodo = () => {
        const trimInput = todoName.trim();
        // check input jika kosoong || check minimal 4 karakter
        if (trimInput === "" || trimInput.length < 4) {
            Alert.alert("Invalid Input", "Please Correct input");
        } else {
            const payload = {
                title: todoName,
                complete: false,
                id: currId + 1,
            };
            dispatch(showLoading(true));
            setTimeout(() => {
                dispatch(addTodo(payload));
                dispatch(showLoading(false));
            }, 1000);
        }
    };

    return (
        <View style={styles.container}>
            {/* heading  */}
            {/* <View style={styles.headerSection}>
        <Heading />
      </View> */}
            {/* form add list  */}
            <View style={styles.formSection}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                    }}
                >
                    <View
                        style={{
                            flex: 3,
                            paddingHorizontal: 5,
                        }}
                    >
                        <Input />
                    </View>
                    <View
                        style={{
                            flex: 2,
                        }}
                    >
                        <SubmitButton title={"Tambah"} onSubmit={submitTodo} />
                    </View>
                </View>
                <Text
                    style={{
                        fontWeight: 200,
                        marginLeft: 10,
                        marginTop: 5,
                    }}
                >
                    Input minimal 4 karakter ya
                </Text>
            </View>

            {/* list  */}
            <View style={styles.listSection}>
                <ToDoList />
            </View>

            {/* tabBar */}
            <View style={styles.tabBarSection}>
                <TabBar />
            </View>
        </View>
    );
}
