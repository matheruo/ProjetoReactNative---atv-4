//import liraries
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../styles/ManipulandoStyles';

// create a component
class Home extends Component {
    render() {
        const {navigation} = this.props;
        const nameUser = navigation.getParam('nome');
        const emailUser = navigation.getParam('email');

        return (
            <View style={styles.container}>
                <Image source={require('../image/user.png')} style={styles.foto}/>
                <Text style={styles.texto3}>{nameUser}</Text>
                <Text style={styles.texto5}>{emailUser}</Text>
                <Text style={styles.texto1}>Seja bem vindo(a) ao Home!</Text>
            </View>
        );
    }
}

//make this component available to the app
export default Home;
