import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { AuthContext } from '../contexts/auth';

import RNPickerSelect from 'react-native-picker-select';


//@ts-ignore
export default function SignupProf({navigation}) {
  const { signUp, user, type } = React.useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [celular, setCelular] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [cref, setCREF] = useState("");
  const [especialidade, setEspecialidade] = useState("Ginástica");
  const [faixaEtaria, setFaixaEtaria] = useState("Idosos");
  const [foco, setFoco] = useState("Fortalecimento");

  const especialidadeOpt = [
    {label: "Ginástica", value: "Ginástica"},
    {label: "Natação", value: "Natação"},
    {label: "Dança", value: "Dança"},
    {label: "Hiit", value: "Hiit"},
    {label: "Academia", value: "Academia"}
  ];

  const faixaEtariaOpt = [
    {label: "Idosos", value: "Idosos"},
    {label: "Crianças", value: "Crianças"},
    {label: "Adulto", value: "Adulto"},
    {label: "Bebês", value: "Bebês"},
  ];

  const focoOpt = [
    {label: "Fortalecimento", value: "Fortalecimento"},
    {label: "Emagrecimento", value: "Emagrecimento"},
    {label: "Ganho de massa muscular", value: "Ganho de massa muscular"},
    {label: "Recuperação", value: "Recuperação"},
  ];



  const [prof, setProf] = useState<any>({ 
    password: "12345", 
    nome: "Professor 1", 
    celular: "(00) 00000-0000", 
    email: "professor1@hotmail.com", 
    nascimento: "00/00/0000", 
    instagram: "professor1", 
    facebook: "profacessor1", 
    cref: "1233456788", 
    foco: "Fortalecimento", 
    especializacao: "Natação", 
    faixaEtaria: "Idosos"
  });

  async function handleSignUp() {
    await signUp(prof, "personal");
    navigation.navigate("Login");
  }

    return (
            <View style={{...styles.container, ...styles.bg}}>
            <View style={{...styles.bg}}>
              <Text>signup cliente</Text>
              <View style={{...styles.conjuntoInput, ...styles.bg}}>
                <TextInput style={{...styles.input}} placeholder="Nome" onChangeText={nome => setNome(nome)}/>
                <TextInput style={{...styles.input}} placeholder="Nascimento" onChangeText={nascimento => setNascimento(nascimento)}/>
              </View>
              <View style={{...styles.conjuntoInput, ...styles.bg}}>
                <TextInput style={{...styles.input}} placeholder="Email" onChangeText={email => setEmail(email)}/>
                <TextInput style={{...styles.input}} placeholder="Celular" onChangeText={celular => setCelular(celular)}/>
              </View>
              <View style={{...styles.conjuntoInput, ...styles.bg}}>
                <TextInput style={{...styles.input}} placeholder="Instagram" onChangeText={instagram => setInstagram(instagram)}/>
                <TextInput style={{...styles.input}} placeholder="Facebook" onChangeText={facebook => setFacebook(facebook)}/>
              </View>
              <TextInput style={{...styles.input, width: 300}} placeholder="CREF" onChangeText={cref => setCREF(cref)}/>
              <TextInput style={{...styles.input, width: 300}} placeholder="Senha" onChangeText={senha => setSenha(senha)}/>
              
              <Text>Especialidade</Text>
              <View style={{...styles.bg, ...styles.picker}}>
                <RNPickerSelect
                  value={especialidade}
                  onValueChange={(value) => setEspecialidade(value)}
                  items={especialidadeOpt}
                />
              </View>

              <Text>Faixa etário alvo</Text>
              <View style={{...styles.bg, ...styles.picker}}>
                <RNPickerSelect
                  value={faixaEtaria}
                  onValueChange={(value) => setFaixaEtaria(value)}
                  items={faixaEtariaOpt}
                />
              </View>

              <Text>Foco</Text>
              <View style={{...styles.bg, ...styles.picker}}>
                <RNPickerSelect
                  value={foco}
                  onValueChange={(value) => setFoco(value)}
                  items={focoOpt}
                />
              </View>
              <TouchableOpacity style={{...styles.btnCadastro}} onPress={() => navigation.navigate("Login")}><Text>Voltar ao login</Text></TouchableOpacity>
              <TouchableOpacity style={{...styles.btnCadastro}} onPress={handleSignUp}><Text>Criar conta</Text></TouchableOpacity>
            </View>
            </View>
    )
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#CC8400'
  },
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
  },
  conjuntoInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  picker: {
    width: 290, 
    height: 30, 
    borderWidth: 1,
    borderColor: "gray",
    marginRight: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    color: "#000",
    marginVertical: 10
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "#fff",
    padding: 0,
    paddingHorizontal: 10,
    marginVertical: 20,
    width: 130,
    marginRight: 20
  },
  btnCadastro: {
    backgroundColor: "blue",
    padding: 10,
    alignItems: "center",
    marginVertical: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  });