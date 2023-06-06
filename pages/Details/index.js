import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { db } from "../../components/config";
import styles from "./style"
import { doc, collection, getDocs, deleteDoc, getDoc, query } from 'firebase/firestore';
import { FontAwesome } from "@expo/vector-icons";

export default function Details({ navigation, route }) {

    const idTask = route.params.id;
    const [details, setDetails] = useState([])
    const docRef = doc(db, "Alunos", idTask);

    useEffect(() => {
        const fetchQuery = async () => {
            const storeData = getDoc(docRef);

            if (storeData) {
                setDetails((await storeData).data());
            } else {

            }
        }
        fetchQuery()
    }, [idTask])


    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
                {/*Mostrar dados dos alunos*/}
                <Text style={styles.label}>Dados do Aluno</Text>
                <Text style={styles.details}><Text style={styles.datas}>Nome:</Text> {details.nome}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Telefone:</Text> {details.fone}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Nascimento:</Text> {details.nascimento}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Data de Entrada: </Text> {details.dataEntrada}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Data de Saída: </Text> {details.dataSaida}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Sexo: </Text> {details.sexo}</Text>
                <Text style={styles.details}><Text style={styles.datas}>RG: </Text> {details.rg}</Text>
                <Text style={styles.details}><Text style={styles.datas}>CPF: </Text> {details.cpf}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Certidão de Nascimento: </Text> {details.certidao}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Etnia: </Text> {details.etnia}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Naturalidade: </Text> {details.naturalidade}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Pessoa com Deficência?</Text> {details.pcd}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Possui Irmãos: </Text> {details.irmaos}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Nome dos Irmãos: </Text> {details.nomeIrmaos}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Responsável Financeiro: </Text> {details.responsavelFin}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Quantidade de Membros na Família: </Text> {details.qtdMembros}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Renda Familiar: </Text> {details.renda}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Rua: </Text> {details.rua}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Número: </Text> {details.numero}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Bairro: </Text> {details.bairro}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Beco: </Text> {details.beco}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Tipo de Residência: </Text> {details.residencia}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Nome da Escola: </Text> {details.escola}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Ano Escolar: </Text> {details.anoEscolar}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Sala/Turma: </Text> {details.salaTurma}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Turno: </Text> {details.turno}</Text>
                <Text style={styles.details}><Text style={styles.datas}>RG do Responsável: </Text> {details.rgResponsavel}</Text>
                <Text style={styles.details}><Text style={styles.datas}>CPF do Responsável: </Text> {details.cpfResponsavel}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Oficina Musical: </Text> {details.ofcMusical}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Oficina Humana: </Text> {details.ofcHumana}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Internet: </Text> {details.internet}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Aparelho: </Text> {details.aparelho}</Text>
                <View style={styles.container}>
                </View>

                {/*Botão para editar cadastro*/}
                <TouchableOpacity
                    style={styles.buttonNewTask}
                    onPress={() => {
                        navigation.navigate("Update", {
                            id: idTask,
                            fone: details.fone,
                            nome: details.nome,
                            dataEntrada: details.dataEntrada,
                            dataSaida: details.dataSaida,
                            nascimento: details.nascimento,
                            sexo: details.sexo,
                            rg: details.rg,
                            cpf: details.cpf,
                            certidao: details.certidao,
                            etnia: details.etnia,
                            naturalidade: details.naturalidade,
                            pcd: details.pcd,
                            irmaos: details.irmaos,
                            nomeIrmaos: details.nomeIrmaos,
                            responsavelFin: details.responsavelFin,
                            qtdMembros: details.qtdMembros,
                            renda: details.renda,
                            rua: details.rua,
                            numero: details.numero,
                            beco: details.beco,
                            bairro: details.bairro,
                            residencia: details.residencia,
                            escola: details.escola,
                            anoEscolar: details.anoEscolar,
                            salaTurma: details.salaTurma,
                            turno: details.turno,
                            rgResponsavel: details.rgResponsavel,
                            cpfResponsavel: details.cpfResponsavel,
                            ofcMusical: details.ofcMusical,
                            ofcHumana: details.ofcHumana,
                            internet: details.internet,
                            aparelho: details.aparelho,
                        })
                    }}>
                    <Text style={styles.iconButton}>Editar Cadastro do Aluno</Text>
                </TouchableOpacity>

                {/*Botão para voltar para página inicial*/}
                <TouchableOpacity
                    style={styles.buttonNewTask}
                    onPress={() => { navigation.navigate("Home") }}>
                    <Text style={styles.iconButton}>Página Inicial</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}