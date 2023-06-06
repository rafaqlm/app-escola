import { StyleSheet, Text, View, TextInput, Alert, ScrollView } from "react-native";
import React, { useState } from 'react'
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../../components/config";

import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Logo from "../../components/Logo";


export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    //change Password
    function forgotPassword() {
        sendPasswordResetEmail(authentication, email)
            .then(() => {
                Alert.alert("Email enviado")
            }).catch((error) => {
                if(error.message == 'Firebase: Error (auth/missing-email).') {
                    Alert.alert('Preencha o campo de email antes de clicar')
                } else{
                Alert.alert('Erro:', error.message)
                }
            })
    }


    function signIn() {
        signInWithEmailAndPassword(authentication, email, password)
            .then((userCredential) => {
                // Signed in
                if (email == 'admin@admin.com') {
                    navigation.navigate("Home")
                } else {
                    console.log("Login feito com sucesso")
                    navigation.navigate("Home Professor")
                }
            })
            .catch((error) => {
                Alert.alert("Senha e/ou email incorretos")
            });

    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Logo style={styles.logo}/>
            <Text style={styles.title}>Login</Text>
            {/*Input Email*/}
            <TextInput placeholder="Email"
                style={styles.input}
                autoCapitalize='none'
                onChangeText={(email) => { setEmail(email) }}
                keyboardType="email-address" />

            {/*Input Senha*/}
            <TextInput placeholder="Senha"
                style={styles.input}
                onChangeText={(password) => { setPassword(password) }}
                secureTextEntry={true}
                minLength={6} />

            {/*Enviar email para redefinir senha*/}
            <View style={styles.row}>
            <TouchableOpacity
                onPress={forgotPassword}
                style={styles.buttonLink}>
                <Text style={styles.link}>Esqueci senha</Text>
            </TouchableOpacity>
            </View>

            {/*Entrar*/}
            <TouchableOpacity
                onPress={signIn}
                style={styles.buttonNewTask}>
                <Text style={styles.button}>Acessar</Text>
            </TouchableOpacity>
        </ScrollView>
    )

}
