import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native';

import styles from '../styles/ManipulandoStyles';

// create a component
class Cadastro extends Component {
    state = {
        nome: ''
      }
    
      state = {
        email: ''
      }

      state = {
        cidade: ''
      }

      state = {
        genero: ''
      }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.texto1}>Seja bem vindo(a) a tela de cadastro!</Text>
                <Image source={require('../image/usuario.jpg')} style={styles.foto}/>
                <Text style={styles.texto6}>Informe seus dados abaixo:</Text>
                <TextInput style={styles.input} onChangeText = {text => this.state.nome = text} placeholder="Informe seu nome" />
                <TextInput style={styles.input} onChangeText = {text => this.state.email = text} placeholder="Informe seu e-mail" />
                <TextInput style={styles.input} onChangeText = {text => this.state.cidade = text} placeholder="Informe sua cidade" />
                <TextInput style={styles.input} onChangeText = {text => this.state.genero = text} placeholder="Informe seu gênero" />
                <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true} />
                <TouchableOpacity
                style={styles.button} onPress={() => { this.props.navigation.navigate('Dados', {'nome' : this.state.nome, 'email' : this.state.email,
                 'cidade' : this.state.cidade, 'genero' : this.state.genero })}}>
                <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

//make this component available to the app
export default Cadastro;
