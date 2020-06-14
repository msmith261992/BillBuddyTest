import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import bannerStyle from '../styles/sections/banner.scss';

//Background Image reference
const imageUrl = { uri: "https://billbuddy.co.uk/static/images/eqbackgroundgreen.png" };

export default class Banner extends React.Component {
    render() { 
        return (
            <View style={bannerStyle.bannerContainer} >
               <ImageBackground source={imageUrl} style={bannerStyle.bannerContainer__background}>
                    <Text style={bannerStyle.bannerContainer__text}>Switch Energy Today and Save £100s</Text>
                </ImageBackground>
            </View>
        );
    }
}