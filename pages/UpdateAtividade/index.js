import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { TextInput, Checkbox } from 'react-native-paper'
import React, { useState } from 'react'
import { db } from '../../components/config'
import styles from './style'
import { TextInputMask } from 'react-native-masked-text'
import { collection, updateDoc, doc } from "firebase/firestore";

export default function UpdateAtividade({navigation, route}) {

    const idTask = route.params.id;
    const [nome, setNome] = useState(route.params.nome)
    const [descricao, setDescricao] = useState(route.params.descricao)


    function updateUser() {
      const userRef = doc(db, "Atividades", idTask)
      console.log(idTask)
      updateDoc(userRef, {
          nome: nome,
          descricao: descricao,
      }).then(() => {
          //Data saved succesfully
          Alert.alert('Atividade atualizada com sucesso');
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
                value={nome}
                onChangeText={(nome) => { setNome(nome) }}
            />
            <Text style={styles.obrigatorio}>*obrigatório</Text>

            {/* Descricao*/}
            <TextInput
                style={styles.input}
                placeholder='Descrição'
                value={descricao}
                onChangeText={(descricao) => { setDescricao(descricao) }}
            />
     
     <      TouchableOpacity
                style={styles.buttonNext}
                onPress={() => updateUser()}
            >
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
