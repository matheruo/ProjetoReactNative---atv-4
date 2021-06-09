//import liraries
import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';

import styles from '../styles/ManipulandoStyles';

// create a component
class Login extends Component {

  state = {
    nome: ''
  }

  state = {
    email: ''
  }

  render() {
    return (
      <ImageBackground 
        source={require('../image/reactnative.png')}
        style={styles.imageBack}>
  
        <Image source={require('../image/reactn.png')} style={styles.logo} />
        <TextInput style={styles.input} onChangeText = {text => this.state.nome = text} placeholder="Informe seu nome" />
        <TextInput style={styles.input} onChangeText = {text => this.state.email = text} placeholder="Informe seu e-mail" />
        <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true} />
        <TouchableOpacity
          //style={styles.button} onPress={() => {this.pressed()}}>
          style={styles.button} onPress={() => { this.props.navigation.navigate('Home',{'nome' : this.state.nome, 'email' : this.state.email})}}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button} onPress={() => { this.props.navigation.navigate('Cadastro')}}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
    </ImageBackground>
    );
  };
}
//make this component available to the app
export default Login;






