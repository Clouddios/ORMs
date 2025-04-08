import react,{useEffect} from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "../assets/css";

export default function Home({navigation}) {
    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.header_img} source={require('../assets/icon.png')} />
            </View>
            <View style={styles.footer}>
                <Text style={[styles.texto, styles.textoWith]}>Digite seu nome para continuar</Text>
                <TextInput placeholder="Nome" style={styles.input} />
                <TouchableOpacity onPress={() => navigation.navigate("Main")}>
                    <View style={styles.button}>
                        <Text style={styles.button_text}>Continuar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}