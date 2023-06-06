import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import { db } from "../../components/config";
import styles from "./style"
import { doc, collection, getDocs, deleteDoc, orderBy, where, query } from 'firebase/firestore';
import { FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";


export default function DadosAtividade({ navigation }) {
  //state que vai receber as nossas tasks quando carregar
  const [task, setTask] = useState('')
  const [search, setSearch] = useState("");

  const showConfirmDialog = (id) => {
    return Alert.alert(
      "Deletar",
      "Tem certeza que quer deletar essa atividade?",
      [
        // The "Yes" button
        {
          text: "Sim",
          onPress: () => {
            deleteTask(id)
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "Não",
        },
      ]
    );
  };

  //carregar toda vez que carreagar os elementos
  const userRef = collection(db, "Atividades");

  //procura por usuário
  useEffect(() => {
    if (search === '') {
      getDocs(query(userRef, orderBy("nome"))).then(docSnap => {
        let list = [];
        docSnap.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id })
        })
        setTask(list);
      })
    } else {
      setTask(
        getDocs(query(userRef, where("nome", "==", search))).then(docSnap => {
          let list = [];
          docSnap.forEach((doc) => {
            list.push({ ...doc.data(), id: doc.id })
          })
          setTask(list);
        }
        )
      )
    }
  }, [search])

  //delete data
  function deleteTask(id) {
    deleteDoc(doc(db, "Atividades", id));
  }

  return (
    <View style={styles.container}>

      <View style={styles.search}>
        <TextInput
          style={styles.searchArea}
          placeholder="Pesquisar uma Atividade"
          placeholderTextColor="#888"
          value={search}
          onChangeText={(t) => setSearch(t)}
        />

      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={task}
        renderItem={({ item }) => {
          return (
            <View style={styles.Tasks}>
              {/* Botão de deletar o usuário*/}
              <TouchableOpacity
                style={styles.deleteTask}
                onPress={() => showConfirmDialog(item.id)}
              >
                <FontAwesome
                  name="trash"
                  size={23}
                  color="orange"
                >
                </FontAwesome>
              </TouchableOpacity>

              {/*Usuário*/}
              <Text
                style={styles.DescriptionTask}
                onPress={() =>
                  navigation.navigate("Atividades", {
                    id: item.id,
                  })
                }
              >
                {item.nome}
              </Text>
            </View>
          )
        }}
      />
    </View>
  )
}