import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Keyboard, TouchableWithoutFeedback } from "react-native";
import styles from "../assets/css";

export default function Cadastro({ navigation }) {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function registerUser() {
        // Lógica para registrar o usuário
        console.log("Usuário registrado:", { user, email, password });
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.header_img} source={require("../assets/icon.png")} />
                </View>
                <View style={styles.footer}>
                    <Text style={[styles.texto, styles.textoWith]}>Digite seu nome para continuar</Text>
                    <TextInput placeholder="Nome" style={styles.input} onChangeText={(text) => setUser(text)} />
                    <TextInput placeholder="Email" style={styles.input} onChangeText={(text) => setEmail(text)} />
                    <TextInput placeholder="Senha" secureTextEntry={true} style={styles.input} onChangeText={(text) => setPassword(text)} />
                    <TouchableOpacity style={styles.button} onPress={registerUser}>
                        <Text style={styles.button_text}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}