import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { TextInput, Checkbox } from 'react-native-paper'
import React, { useState } from 'react'
import { db } from '../../components/config'
import styles from './style'
import { TextInputMask } from 'react-native-masked-text'
import { collection, updateDoc, doc } from "firebase/firestore";

export default function Update({navigation, route}) {

    const idTask = route.params.id;
    const [dataEntrada, setDataEntrada] = useState(route.params.dataEntrada)
    const [dataSaida, setDataSaida] = useState(route.params.dataSaida)
    const [nome, setNome] = useState(route.params.nome)
    const [fone, setFone] = useState(route.params.fone)
    const [nascimento, setNascimento] = useState(route.params.nascimento)
    const [sexo, setSexo] = useState(route.params.sexo)
    const [rg, setRg] = useState(route.params.rg)
    const [cpf, setCpf] = useState(route.params.cpf)
    const [certidao, setCertidao] = useState(route.params.certidao)
    const [etnia, setEtnia] = useState(route.params.etnia)
    const [naturalidade, setNaturalidade] = useState(route.params.naturalidade)
    const [pcd, setPcd] = useState(route.params.pcd)
    const [irmaos, setIrmaos] = useState(route.params.irmaos)
    const [nomeIrmaos, setNomeIrmaos] = useState(route.params.nomeIrmaos)
    const [responsavelFin, setResponsavelFin] = useState(route.params.responsavelFin)
    const [qtdMembros, setQtdMembros] = useState(route.params.qtdMembros)
    const [renda, setRenda] = useState(route.params.renda)
    const [rua, setRua] = useState(route.params.rua)
    const [beco, setBeco] = useState(route.params.beco)
    const [numero, setNumero] = useState(route.params.numero)
    const [bairro, setBairro] = useState(route.params.bairro)
    const [residencia, setResidencia] = useState(route.params.residencia)
    const [escola, setEscola] = useState(route.params.escola)
    const [anoEscolar, setAnoEscolar] = useState(route.params.anoEscolar)
    const [salaTurma, setSalaTurma] = useState(route.params.salaTurma)
    const [turno, setTurno] = useState(route.params.turno)
    const [rgResponsavel, setRgResponsavel] = useState(route.params.rgResponsavel)
    const [cpfResponsavel, setCpfResponsavel] = useState(route.params.cpf)
    const [ofcMusical, setOfcMusical] = useState(route.params.ofcMusical)
    const [ofcHumana, setOfcHumana] = useState(route.params.ofcHumana)
    const [internet, setInternet] = useState(route.params.internet)
    const [aparelho, setAparelho] = useState(route.params.aparelho)

    function updateUser() {
      const userRef = doc(db, "Alunos", idTask)
      console.log(idTask)
      updateDoc(userRef, {
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
          Alert.alert('Aluno atualizado com sucesso');
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
                value={dataEntrada}
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
                value={dataSaida}
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
                value={nome}
                onChangeText={(nome) => { setNome(nome) }}
            />
            <Text style={styles.obrigatorio}>*obrigatório</Text>

            {/* Fone */}
            <TextInput
                label="Fone"
                style={styles.input}
                placeholder={'(99) 9999-9999 ou (99) 99999-9999'}
                keyboardType="numeric"
                value={fone}
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
                value={nascimento}
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
                value={sexo}
                placeholder='Sexo'
                onChangeText={(sexo) => { setSexo(sexo) }}
            />
            <Text style={styles.obrigatorio}>*obrigatório</Text>

            {/* RG */}
            <TextInput
                style={styles.input}
                placeholder='RG'
                value={rg}
                keyboardType="numeric"
                onChangeText={(rg) => { setRg(rg) }}
            />


            {/* CPF */}
            <TextInput
                style={styles.input}
                placeholder='CPF'
                value={cpf}
                keyboardType="numeric"
                onChangeText={(cpf) => { setCpf(cpf) }}
                render={(props) => <TextInputMask {...props} type={'cpf'} />}
            />
            <Text style={styles.obrigatorio}>*obrigatório</Text>

            {/* certidao */}
            <TextInput
                style={styles.input}
                placeholder='Certidão de Nascimento'
                value={certidao}
                keyboardType="numeric"
                onChangeText={(certidao) => { setCertidao(certidao) }}
            />

            {/* Etnia */}
            <TextInput
                style={styles.input}
                placeholder='Etnia/Cor'
                value={etnia}
                onChangeText={(etnia) => { setEtnia(etnia) }}
            />
            <Text style={styles.obrigatorio}>*obrigatório</Text>

            {/* Naturalidade */}
            <TextInput
                style={styles.input}
                placeholder='Naturalidade'
                value={naturalidade}
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
                value={nomeIrmaos}
                onChangeText={(nomeIrmaos) => { setNomeIrmaos(nomeIrmaos) }}
            />

            {/* Principal Responável Finaceiro*/}
            <TextInput
                style={styles.input}
                label='Principal Responável Finaceiro'
                value={responsavelFin}
                onChangeText={(responsavelFin) => { setResponsavelFin(responsavelFin) }}
            />

            {/* Quantidade de Membros*/}
            <TextInput
                style={styles.input}
                label='Quantidade de Membros'
                value={qtdMembros}
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
                value={renda}
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
                value={rua}
                onChangeText={(rua) => { setRua(rua) }}
            />

            {/* Beco*/}
            <TextInput
                style={styles.input}
                label="Beco"
                onChangeText={(beco) => { setBeco(beco) }}
            />

            {/* Numero*/}
            <TextInput
                style={styles.input}
                label="Número"
                keyboardType="numeric"
                value={numero}
                onChangeText={(numero) => { setNumero(numero) }}
            />

            {/* Bairro*/}
            <TextInput
                style={styles.input}
                label="Bairro"
                value={bairro}
                onChangeText={(bairro) => { setBairro(bairro) }}
            />

            {/* Tipo de Residencia */}
            <TextInput
                style={styles.input}
                label="Tipo de Residência "
                value={residencia}
                onChangeText={(residencia) => { setResidencia(residencia) }}
                placeholder={'Alugada / Própria / Cedida / Outros'}
            />




            {/*FORM */}
            <Text style={styles.label}>Formulário Escola</Text>
            {/* Escola*/}
            <TextInput
                style={styles.input}
                label="Nome da Escola"
                value={escola}
                onChangeText={(escola) => { setEscola(escola) }}
            />

            {/* Ano Escolar*/}
            <TextInput
                style={styles.input}
                label="Ano Escolar"
                value={anoEscolar}
                onChangeText={(anoEscolar) => { setAnoEscolar(anoEscolar) }}
            />

            {/* Sala/Turma */}
            <TextInput
                style={styles.input}
                label="Sala/Turma"
                value={salaTurma}
                onChangeText={(salaTurma) => { setSalaTurma(salaTurma) }}
            />

            {/* Turno */}
            <TextInput
                style={styles.input}
                label="Turno"
                value={turno}
                onChangeText={(turno) => { setTurno(turno) }}
            />


            {/*FORM */}
            <Text style={styles.label}>Formulário Responsável</Text>

            {/* RG Responsavel */}
            <TextInput
                style={styles.input}
                label="RG"
                value={rgResponsavel}
                keyboardType="numeric"
                onChangeText={(rgResponsavel) => { setRgResponsavel(rgResponsavel) }}
            />

            {/* CPF Responsavel */}
            <TextInput
                style={styles.input}
                label="CPF"
                value={cpfResponsavel}
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
                onPress={() => updateUser()}
            >
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
