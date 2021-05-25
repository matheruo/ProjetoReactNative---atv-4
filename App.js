//import liraries
import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack';

import Login from './src/components/Login';
import Home from './src/components/Home';
import Cadastro from './src/components/Cadastro';
import Dados from './src/components/Dados';

// create a component
const MainNavigation = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions:{
    //headerTitle: 'Login',
    header: null
    }
  },
  Home: {
    screen: Home,
    navigationOptions:{
    headerTitle: 'Home',
    tabBarLabel: 'Testando!',
    }
  },
  Cadastro: {
    screen: Cadastro,
    navigationOptions:{
    headerTitle: 'Cadastro',
    tabBarLabel: 'Testando!',
    }
  },
  Dados: {
    screen: Dados,
    navigationOptions:{
    headerTitle: 'Dados Cadastrados',
    tabBarLabel: 'Testando!',
    }
  }
}
)

//make this component available to the app
export default createAppContainer(MainNavigation);






