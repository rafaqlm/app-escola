import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'

import Logo from '../../components/Logo'
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { signOut } from 'firebase/auth';
import { authentication } from '../../components/config';
import { AntDesign } from '@expo/vector-icons';

export default function HomeProf({ navigation }) {

    //Página Inicial de professores

    function signOutFunction() {
        signOut(authentication).then(() => {
            navigation.navigate("Login")
        }).catch((error) => {
            Alert.alert("Tivemos um erro inesperado, tente novamente mais tarde")
        });
    }

    return (
        <View style={styles.container} >

            <View style={styles.row}>
                {/*Botão para cadastrar nova turma*/}
                <TouchableOpacity
                    style={styles.button1}
                    onPress={() => { navigation.navigate("CadastroTurma") }}>
                    <AntDesign name="filetext1" size={24} color="white" />
                    <Text style={styles.button}>Cadastrar Turma</Text>
                </TouchableOpacity>
                {/*Botão para ver turmas cadastradas*/}
                <TouchableOpacity
                    style={styles.button3}
                    onPress={() => { navigation.navigate("DadosTurma") }}>
                        <AntDesign name="folder1" size={24} color="white" /> 
                    <Text style={styles.button}>Turmas Cadastradas</Text>
                </TouchableOpacity>
            </View>

            {/*Botão para ver os horários*/}
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => { navigation.navigate("Horarios") }}>
                <Text style={styles.button}>Meus Horários</Text>
            </TouchableOpacity>

            {/*Sair*/}
            <TouchableOpacity
                style={styles.buttonLink}
                onPress={signOutFunction}>
                <Text style={styles.link}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}
