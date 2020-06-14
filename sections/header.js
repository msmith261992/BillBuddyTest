import React from 'react';
import { View, Image } from 'react-native';
import headingStyle from '../styles/sections/header.scss';

export default class Header extends React.Component {
    render() { 
        return (
            <View style={headingStyle.header} >
                <Image resizeMode="contain" style={headingStyle.logo} source={require('../assets/billbuddy-logo.png')} />
            </View>
        );
    }
}