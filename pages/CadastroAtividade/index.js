import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { TextInput, Checkbox } from 'react-native-paper'
import React, { useState } from 'react'
import { db } from '../../components/config'
import styles from './style'
import { addDoc, collection } from "firebase/firestore";

export default function CadastroAtividade({navigation}) {


    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')



    function addTask() {
        addDoc(collection(db, "Atividades"), {
            nome: nome,
            descricao: descricao,
        }).then(() => {
            //Data saved succesfully
            Alert.alert('Atividade Cadastrada com sucesso');
        }).catch((error) => {
            console.log(error);
        })
        navigation.navigate("Home")
    }


    return (
        <ScrollView style={styles.container}>
            <Text style={styles.label}>Formulário da Atividade</Text>

            {/* Nome*/}
            <TextInput
                style={styles.input}
                placeholder='Nome'
                onChangeText={(nome) => { setNome(nome) }}
            />
            <Text style={styles.obrigatorio}>*obrigatório</Text>

            {/* Descricao*/}
            <TextInput
                style={styles.input}
                placeholder='Descrição'
                onChangeText={(descricao) => { setDescricao(descricao) }}
            />

            <TouchableOpacity
                style={styles.buttonNext}
                onPress={() => { addTask() }}
            >
                <Text style={styles.iconButton}>Cadastrar Atividade</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
