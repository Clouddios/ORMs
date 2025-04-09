import React, {useState,useEffect} from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Keyboard, TouchableWithoutFeedback } from "react-native";
import styles from "../assets/css";
import config from "../config/config";

export default function ConsultaUsuarios({ navigation }) {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    //function to fetch users
    async function fetchUsers() {
        try {
            const response = await fetch(`${config.apiUrl}/users`);
            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchUsers();
    }, []);
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.header_img} source={require("../assets/icon.png")} />
                </View>
                <View style={styles.footer}>
                    {loading ? (
                        <Text style={[styles.texto, styles.textoWith]}>Loading...</Text>
                    ) : (
                        user.map((item) => (
                            <View key={item.id} style={styles.userCard}>
                                <Text style={[styles.texto, styles.textoWith]}>{item.name}</Text>
                                <Text style={[styles.texto, styles.textoWith]}>{item.email}</Text>
                            </View>
                        ))
                    )}
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}