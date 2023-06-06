import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native'
import React from 'react'

import Logo from '../../components/Logo'
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { signOut } from 'firebase/auth';
import { authentication } from '../../components/config';
import { AntDesign } from '@expo/vector-icons';

export default function Home({ navigation }) {

    function signOutFunction() {
        signOut(authentication).then(() => {
            navigation.navigate("Login")
        }).catch((error) => {
            Alert.alert("Tivemos um erro inesperado, tente novamente mais tarde")
        });
    }

    return (
        <View style={styles.container} >
            <ScrollView>
                <View style={styles.row}>
                    {/*Botão para cadastrar novo professor*/}
                    <TouchableOpacity
                        style={styles.button1}
                        onPress={() => navigation.navigate("Cadastro")}>
                        <AntDesign name="addfile" size={24} color="white" />
                        <Text style={styles.button}>Cadastrar Professor</Text>
                    </TouchableOpacity>

                    {/*Botão para cadastrar novo aluno*/}
                    <TouchableOpacity
                        style={styles.button2}
                        onPress={() => { navigation.navigate("Main") }}>
                        <AntDesign name="addfile" size={24} color="white" />
                        <Text style={styles.button}>Cadastrar Educando</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    {/*Botão para ver alunos cadastrados*/}
                    <TouchableOpacity
                        style={styles.button3}
                        onPress={() => { navigation.navigate("DadosEducando") }}>
                        <AntDesign name="folder1" size={24} color="white" />
                        <Text style={styles.button}>Educandos Cadastrados</Text>
                    </TouchableOpacity>

                    {/*Botão para cadastrar nova atividade*/}
                    <TouchableOpacity
                        style={styles.button4}
                        onPress={() => { navigation.navigate("CadastroAtividade") }}>
                        <AntDesign name="filetext1" size={24} color="white" />
                        <Text style={styles.button}>Cadastrar Atividade</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    {/*Botão para ver atividades cadastradas*/}
                    <TouchableOpacity
                        style={styles.button5}
                        onPress={() => { navigation.navigate("DadosAtividade") }}>
                        <AntDesign name="folder1" size={24} color="white" />
                        <Text style={styles.button}>Atividades Cadastradas</Text>
                    </TouchableOpacity>
                    </View>

                {/*Fazer Logout*/}
                <View style={styles.rowFinal}>
                <TouchableOpacity
                    style={styles.buttonLink}
                    onPress={signOutFunction}>
                    <Text style={styles.link}>Logout</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

    )
}
