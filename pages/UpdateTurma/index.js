import { View, Text, TouchableOpacity, ScrollView, Alert, FlatList } from 'react-native'
import { TextInput, Checkbox } from 'react-native-paper'
import React, { useState, useEffect } from 'react'
import { db } from '../../components/config'
import styles from './style'
import { TextInputMask } from 'react-native-masked-text'
import { collection, updateDoc, doc, getDocs, addDoc } from "firebase/firestore";
import { Picker } from '@react-native-picker/picker';

export default function UpdateTurma({ navigation, route }) {

    const idTask = route.params.id;
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [horario, setHorario] = useState('')
    const [dias, setDias] = useState('')
    const [turno, setTurno] = useState('')
    const [professor, setProfessor] = useState('')
    const [alunos, setAlunos] = useState([]); // Modificado para um array vazio
    const [nomesAlunos, setNomesAlunos] = useState([]);
    const [atividadeSelecionada, setAtividadeSelecionada] = useState(null);
    const [nomesAtividades, setNomesAtividades] = useState([]);

    useEffect(() => {
        buscarAlunosNoFirebase();
    }, []);

    const buscarAlunosNoFirebase = async () => {
        try {
            const alunosRef = collection(db, 'Alunos');
            const snapshot = await getDocs(alunosRef);
            const alunos = snapshot.docs.map(doc => doc.data());

            const nomes = alunos.map(aluno => aluno.nome);
            setNomesAlunos(nomes);
        } catch (error) {
            console.log('Erro ao buscar alunos no Firestore:', error);
        }
    };

    const adicionarAluno = (aluno) => {
        setAlunos([...alunos, aluno]);
    };

    const removerAluno = (aluno) => {
        const novoArray = alunos.filter((nomeAluno) => nomeAluno !== aluno);
        setAlunos(novoArray);
    };

    const renderizarAluno = ({ item }) => (
        <View style={styles.alunoContainer}>
            <Text style={styles.alunoNome}>{item}</Text>
            <TouchableOpacity onPress={() => removerAluno(item)}>
                <Text style={styles.removerAluno}>Remover</Text>
            </TouchableOpacity>
        </View>
    );
    useEffect(() => {
        buscarAtividadeNoFirebase();
    }, []);

    const buscarAtividadeNoFirebase = async () => {
        try {
            const atividadesRef = collection(db, 'Atividades');
            const snapshot = await getDocs(atividadesRef);
            const atividades = snapshot.docs.map(doc => doc.data());

            const nomes = atividades.map(atividade => atividade.nome);
            setNomesAtividades(nomes);
        } catch (error) {
            console.log('Erro ao buscar atividades no Firestore:', error);
        }
    };

    function updateUser() {
        const userRef = doc(db, "Turmas", idTask)
        console.log(idTask)
        updateDoc(userRef, {
            nome: nome,
            descricao: descricao,
            atividadeSelecionada: atividadeSelecionada,
            horario: horario,
            dias: dias,
            turno: turno,
            alunos: alunos,
            professor: professor,
        }).then(() => {
            //Data saved succesfully
            Alert.alert('Turma atualizada com sucesso');
        }).catch((error) => {
            console.log(error);
        })
        navigation.navigate("Home")
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.label}>Formulário da Turma</Text>

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

            {/* Atividade */}
            <View style={styles.atividadeContainer}>
                <Picker
                    selectedValue={atividadeSelecionada}
                    style={styles.picker}
                    onValueChange={(itemValue) => {
                        setAtividadeSelecionada(itemValue);
                    }}
                >
                    <Picker.Item label="Selecione atividade (Apenas cadastrada!)" value={null} />
                    {nomesAtividades.map((nomeAtividade) => (
                        <Picker.Item key={nomeAtividade} label={nomeAtividade} value={nomeAtividade} />
                    ))}
                </Picker>
                <Text style={styles.obrigatorio}>*obrigatório</Text>
            </View>

            {/* Horario*/}
            <TextInput
                style={styles.input}
                placeholder='Horário'
                onChangeText={(horario) => { setHorario(horario) }}
            />
            <Text style={styles.obrigatorio}>*obrigatório</Text>


            {/* Dias*/}
            <TextInput
                style={styles.input}
                placeholder='Dias'
                onChangeText={(dias) => { setDias(dias) }}
            />
            <Text style={styles.obrigatorio}>*obrigatório</Text>


            {/* Turno*/}
            <TextInput
                style={styles.input}
                placeholder='Turno'
                onChangeText={(turno) => { setTurno(turno) }}
            />
            <Text style={styles.obrigatorio}>*obrigatório</Text>


            {/* Alunos */}
            <View style={styles.alunosContainer}>
                <Picker
                    selectedValue={null}
                    style={styles.picker}
                    onValueChange={(itemValue) => {
                        if (itemValue) {
                            adicionarAluno(itemValue);
                        }
                    }}
                >
                    <Picker.Item label="Selecione alunos (Apenas cadastrados!)" value={null} />
                    {nomesAlunos.map((nomeAluno) => (
                        <Picker.Item key={nomeAluno} label={nomeAluno} value={nomeAluno} />
                    ))}
                </Picker>
            </View>

            {/* Lista de alunos selecionados */}
            <FlatList
                data={alunos}
                renderItem={renderizarAluno}
                keyExtractor={(item) => item}
                style={styles.listaAlunos}
            />

            {/* Professor*/}
            <TextInput
                style={styles.input}
                placeholder='Professor'
                onChangeText={(professor) => { setProfessor(professor) }}
            />


            <TouchableOpacity
                style={styles.buttonNext}
                onPress={() => updateUser()}
            >
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
