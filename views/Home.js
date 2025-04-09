import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import css from "../assets/css";
 
export default function Home({navigation}) {
    return (
        <View style={css.container}>
            <View style={css.header}>
                <Image source={require("../assets/favicon.png")} style={css.header_img} />
            </View>
            <View style={css.footer}>
                <TouchableOpacity
                    style={css.button}
                    onPress={() => navigation.navigate("Cadastro")}
                >
                    <Text style={css.button_text}>Cadastro</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};