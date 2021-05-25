//import liraries
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../styles/ManipulandoStyles';

// create a component
class Dados extends Component {
    render() {
        const {navigation} = this.props;
        const nameUser = navigation.getParam('nome');
        const emailUser = navigation.getParam('email');
        const cidadeUser = navigation.getParam('cidade');
        const generoUser = navigation.getParam('genero');


        return (
            <View style={styles.container}>
                <Image source={require('../image/user2.png')} style={styles.foto}/>
                <Text style={styles.texto5}>Dados Cadastrados:</Text>
                <Text style={styles.texto3}>{nameUser}</Text>
                <Text style={styles.texto3}>{emailUser}</Text>
                <Text style={styles.texto3}>{cidadeUser}</Text>
                <Text style={styles.texto5}>{generoUser}</Text>
            </View>
        );
    }
}

//make this component available to the app
export default Dados;
