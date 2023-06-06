import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { TextInput, Checkbox } from 'react-native-paper'
import React, { useState } from 'react'
import { db } from '../../components/config'
import styles from './style'
import { TextInputMask } from 'react-native-masked-text'
import { addDoc, collection } from "firebase/firestore";

export default function Main({navigation}) {

    const [dataEntrada, setDataEntrada] = useState('')
    const [dataSaida, setDataSaida] = useState('')
    const [nome, setNome] = useState('')
    const [fone, setFone] = useState('')
    const [nascimento, setNascimento] = useState('')
    const [sexo, setSexo] = useState('')
    const [rg, setRg] = useState('')
    const [cpf, setCpf] = useState('')
    const [certidao, setCertidao] = useState('')
    const [etnia, setEtnia] = useState('')
    const [naturalidade, setNaturalidade] = useState('')
    const [pcd, setPcd] = useState('')
    const [irmaos, setIrmaos] = useState('')
    const [nomeIrmaos, setNomeIrmaos] = useState('')
    const [responsavelFin, setResponsavelFin] = useState('')
    const [qtdMembros, setQtdMembros] = useState('')
    const [renda, setRenda] = useState('')
    const [rua, setRua] = useState('')
    const [beco, setBeco] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState('')
    const [residencia, setResidencia] = useState('')
    const [escola, setEscola] = useState('')
    const [anoEscolar, setAnoEscolar] = useState('')
    const [salaTurma, setSalaTurma] = useState('')
    const [turno, setTurno] = useState('')
    const [rgResponsavel, setRgResponsavel] = useState('')
    const [cpfResponsavel, setCpfResponsavel] = useState('')
    const [ofcMusical, setOfcMusical] = useState('')
    const [ofcHumana, setOfcHumana] = useState('')
    const [internet, setInternet] = useState('')
    const [aparelho, setAparelho] = useState('')


    function addTask() {
        addDoc(collection(db, "Alunos"), {
            dataEntrada: dataEntrada,
            dataSaida: dataSaida,
            nome: nome,
            fone: fone,
            nascimento: nascimento,
            sexo: sexo,
            rg: rg,
            cpf: cpf,
            certidao: certidao,
            etnia: etnia,
            naturalidade: naturalidade,
            pcd: pcd,
            irmaos: irmaos,
            nomeIrmaos: nomeIrmaos,
            responsavelFin: responsavelFin,
            qtdMembros: qtdMembros,
            renda: renda,
            beco: beco,
            rua: rua,
            numero: numero,
            bairro: bairro,
            residencia: residencia,
            escola: escola,
            anoEscolar: anoEscolar,
            salaTurma: salaTurma,
            turno: turno,
            rgResponsavel: rgResponsavel,
            cpfResponsavel: cpfResponsavel,
            ofcMusical: ofcMusical,
            ofcHumana: ofcHumana,
            internet: internet,
            aparelho: aparelho,
        }).then(() => {
            //Data saved succesfully
            Alert.alert('Aluno Cadastrado com sucesso');
        }).catch((error) => {
            console.log(error);
        })
        navigation.navigate("Home")
    }


    return (
        <ScrollView style={styles.container}>
            <Text style={styles.label}>Formulário do Educando</Text>

            {/* Data de Entrada */}
            <TextInput
                label="Data de Entrada"
                style={styles.input}
                placeholder={'dd/mm/aaaa'}
                keyboardType="numeric"
                onChangeText={(dataEntrada) => { setDataEntrada(dataEntrada) }}
                render={(props) => (
                    <TextInputMask
                        {...props}
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY',
                        }}
                    />
                )}
            />
            <Text style={styles.obrigatorio}>*obrigatório</Text>

            {/* Data de Saida */}
            <TextInput
                label="Data de Saida"
                style={styles.input}
                placeholder={'dd/mm/aaaa'}
                keyboardType="numeric"
                onChangeText={(dataSaida) => { setDataSaida(dataSaida) }}
                render={(props) => (
                    <TextInputMask
                        {...props}
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY',
                        }}
                    />
                )}
            />

            {/* Nome*/}
            <TextInput
                style={styles.input}
                placeholder='Nome'
                onChangeText={(nome) => { setNome(nome) }}
            />
            <Text style={styles.obrigatorio}>*obrigatório</Text>

            {/* Fone */}
            <TextInput
                label="Fone"
                style={styles.input}
                placeholder={'(99) 9999-9999 ou (99) 99999-9999'}
                keyboardType="numeric"
                onChangeText={(fone) => { setFone(fone) }}
                render={(props) => (
                    <TextInputMask
                        {...props}
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) ',
                        }}
                    />
                )}
            />
            <Text style={styles.obrigatorio}>*obrigatório</Text>

            {/* Nascimento */}
            <TextInput
                label="Nascimento"
                style={styles.input}
                placeholder={'dd/mm/aaaa'}
                keyboardType="numeric"
                onChangeText={(nascimento) => { setNascimento(nascimento) }}
                render={(props) => (
                    <TextInputMask
                        {...props}
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY',
                        }}
                    />
                )}
            />
            <Text style={styles.obrigatorio}>*obrigatório</Text>

            {/* Sexo */}
            <TextInput
                style={styles.input}
                placeholder='Sexo'
                onChangeText={(sexo) => { setSexo(sexo) }}
            />
            <Text style={styles.obrigatorio}>*obrigatório</Text>

            {/* RG */}
            <TextInput
                style={styles.input}
                placeholder='RG'
                keyboardType="numeric"
                onChangeText={(rg) => { setRg(rg) }}
            />


            {/* CPF */}
            <TextInput
                style={styles.input}
                placeholder='CPF'
                keyboardType="numeric"
                onChangeText={(cpf) => { setCpf(cpf) }}
                render={(props) => <TextInputMask {...props} type={'cpf'} />}
            />
            <Text style={styles.obrigatorio}>*obrigatório</Text>

            {/* certidao */}
            <TextInput
                style={styles.input}
                placeholder='Certidão de Nascimento'
                keyboardType="numeric"
                onChangeText={(certidao) => { setCertidao(certidao) }}
            />

            {/* Etnia */}
            <TextInput
                style={styles.input}
                placeholder='Etnia/Cor'
                onChangeText={(etnia) => { setEtnia(etnia) }}
            />
            <Text style={styles.obrigatorio}>*obrigatório</Text>

            {/* Naturalidade */}
            <TextInput
                style={styles.input}
                placeholder='Naturalidade'
                onChangeText={(naturalidade) => { setNaturalidade(naturalidade) }}
            />
            <Text style={styles.obrigatorio}>*obrigatório</Text>

            {/* PCD */}
            <TextInput
                label="Pessoa com Deficência?"
                style={styles.input}
                onChangeText={(pcd) => { setPcd(pcd) }}
                render={(props) => (
                    <Checkbox.Item
                        {...props}
                        onPress={()=> {setPcd(!pcd)}}
                        status={pcd ? 'checked' : 'unchecked'}
                    />
                )}
            />
            <Text style={styles.obrigatorio}>Selecione caso sim</Text>


            {/*FORM */}
            <Text style={styles.label}>Formulário da FamÍlia</Text>
            {/* Possui Irmãos*/}
            <TextInput
                label="Possui Irmãos Membros do Instituto?"
                style={styles.input2}
                onChangeText={(irmaos) => { setIrmaos(irmaos) }}
                render={(props) => (
                    <Checkbox.Item
                        {...props}
                        onPress={()=> {setIrmaos(!irmaos)}}
                        status={irmaos ? 'checked' : 'unchecked'}
                    />
                )}
            />
            <Text style={styles.obrigatorio}>*obrigatório</Text>


            {/* Nome dos Irmãos*/}
            <TextInput
                style={styles.input}
                label='Nome dos Irmãos Membros'
                onChangeText={(nomeIrmaos) => { setNomeIrmaos(nomeIrmaos) }}
            />

            {/* Principal Responável Finaceiro*/}
            <TextInput
                style={styles.input}
                label='Principal Responável Finaceiro'
                onChangeText={(responsavelFin) => { setResponsavelFin(responsavelFin) }}
            />

            {/* Quantidade de Membros*/}
            <TextInput
                style={styles.input}
                label='Quantidade de Membros'
                keyboardType="numeric"
                placeholder={'Incluindo o Educando'}
                onChangeText={(qtdMembros) => { setQtdMembros(qtdMembros) }}
            />

            {/*Renda Familiar*/}
            <TextInput
                style={styles.input}
                label='Renda Familiar'
                keyboardType="numeric"
                placeholder={'Per Capita'}
                onChangeText={(renda) => { setRenda(renda) }}
                render={(props) => (
                    <TextInputMask
                        {...props}
                        type={'money'}
                        options={{
                            precision: 2,
                            separator: ',',
                            delimiter: '.',
                            unit: 'R$',
                            suffixUnit: '',
                        }}
                    />
                )}
            />

            {/*FORM */}
            <Text style={styles.label}>Formulário Residencia</Text>
            {/* Rua*/}
            <TextInput
                style={styles.input}
                label="Rua"
                onChangeText={(rua) => { setRua(rua) }}
            />

            {/* Beco*/}
            <TextInput
                style={styles.input}
                placeholder='Beco'
                onChangeText={(beco) => { setBeco(beco) }}
            />

            {/* Numero*/}
            <TextInput
                style={styles.input}
                label="Número"
                keyboardType="numeric"
                onChangeText={(numero) => { setNumero(numero) }}
            />

            {/* Bairro*/}
            <TextInput
                style={styles.input}
                label="Bairro"
                onChangeText={(bairro) => { setBairro(bairro) }}
            />

            {/* Tipo de Residencia */}
            <TextInput
                style={styles.input}
                label="Tipo de Residência "
                onChangeText={(residencia) => { setResidencia(residencia) }}
                placeholder={'Alugada / Própria / Cedida / Outros'}
            />




            {/*FORM */}
            <Text style={styles.label}>Formulário Escola</Text>
            {/* Escola*/}
            <TextInput
                style={styles.input}
                label="Nome da Escola"
                onChangeText={(escola) => { setEscola(escola) }}
            />

            {/* Ano Escolar*/}
            <TextInput
                style={styles.input}
                label="Ano Escolar"
                onChangeText={(anoEscolar) => { setAnoEscolar(anoEscolar) }}
            />

            {/* Sala/Turma */}
            <TextInput
                style={styles.input}
                label="Sala/Turma"
                onChangeText={(salaTurma) => { setSalaTurma(salaTurma) }}
            />

            {/* Turno */}
            <TextInput
                style={styles.input}
                label="Turno"
                onChangeText={(turno) => { setTurno(turno) }}
            />


            {/*FORM */}
            <Text style={styles.label}>Formulário Responsável</Text>

            {/* CPF Responsavel */}
            <TextInput
                style={styles.input}
                label="RG"
                keyboardType="numeric"
                onChangeText={(rgResponsavel) => { setRgResponsavel(rgResponsavel) }}
            />

            {/* CPF Responsavel */}
            <TextInput
                style={styles.input}
                label="CPF"
                keyboardType="numeric"
                onChangeText={(cpfResponsavel) => { setCpfResponsavel(cpfResponsavel) }}
                render={(props) => <TextInputMask {...props} type={'cpf'} />}
            />



            {/*FORM */}
            <Text style={styles.label}>Dados Oficina</Text>

            {/* Oficina Musical */}
            <TextInput
                style={styles.input}
                label="Oficina Musical"
                onChangeText={(ofcMusical) => { setOfcMusical(ofcMusical) }}
                render={(props) => (
                    <Checkbox.Item
                        {...props}
                        onPress={()=> {setOfcMusical(!ofcMusical)}}
                        status={ofcMusical ? 'checked' : 'unchecked'}
                    />
                )}
            />

            {/* Oficina Humana */}
            <TextInput
                style={styles.input}
                label="Oficina de Formação Humana"
                onChangeText={(ofcHumana) => { setOfcHumana(ofcMusical) }}
                render={(props) => (
                    <Checkbox.Item
                        {...props}
                        onPress={()=> {setOfcHumana(!ofcHumana)}}
                        status={ofcHumana ? 'checked' : 'unchecked'}
                    />
                )}
            />


            {/*FORM */}
            <Text style={styles.label}>Dados Ferramentas </Text>
            {/* Internet */}
            <TextInput
                style={styles.input}
                label="Internet"
                onChangeText={(internet) => { setInternet(internet) }}
                render={(props) => (
                    <Checkbox.Item
                        {...props}
                        onPress={()=> {setInternet(!internet)}}
                        status={internet ? 'checked' : 'unchecked'}
                    />
                )}
            />

            {/* Aparelhos */}
            <TextInput
                style={styles.input}
                label="Dispositivo para Aulas Online"
                onChangeText={(aparelho) => { setAparelho(aparelho) }}
                render={(props) => (
                    <Checkbox.Item
                        {...props}
                        onPress={()=> {setAparelho(!aparelho)}}
                        status={aparelho ? 'checked' : 'unchecked'}
                    />
                )}
            />


            <TouchableOpacity
                style={styles.buttonNext}
                onPress={() => { addTask() }}
            >
                <Text style={styles.iconButton}>Cadastrar Aluno</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
