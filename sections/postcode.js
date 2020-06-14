import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import InputText from '../components/input-text';

import postcodeStyles from '../styles/sections/postcode.scss';
import appStyle from '../styles/app.scss';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLock, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default class Postcode extends React.Component {
    constructor(props) {
        super(props);
        this.state = { postcode: null};
    }
    
    state = {
        postcode: '',
    }

    onPress = () => {
        axios.get(`https://api.postcodes.io/random/postcodes`)
        .then(res => {
            if(res.data.result) {
                this.setState({
                    postcode: res.data.result.postcode
                });
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    render() { 
        return (
            <View style={[appStyle.mainSidePadding, appStyle.newSectionVerticalPadding, appStyle.endSectionBorder, postcodeStyles.postcodeContainer]}>
                <Text style={postcodeStyles.postcodeContainer__title}>
                    What is your postcode?
                </Text>
                <Text style={[appStyle.subContentText, postcodeStyles.postcodeContainer__subtitle, postcodeStyles.postcodeContainer__marginInbetween]}>
                    Enter your postcode below to get started. Then, 
                    fill in your details to secure cheaper energy
                </Text>
                <View style={[postcodeStyles.postcodeContainer__marginInbetween, postcodeStyles.postcodeContainer__inputContainer]}>
                    <InputText placeholder={'SW1A 1AA'} value={this.state.postcode} />
                </View>
                <TouchableOpacity  style={[postcodeStyles.postcodeContainer__button, postcodeStyles.postcodeContainer__marginInbetween]}
                    onPress={this.onPress}>
                    <Text style={postcodeStyles.postcodeContainer__button__text}>
                        Generate Postcode
                    </Text>
                    <FontAwesomeIcon style={postcodeStyles.postcodeContainer__button__arrowIcon} icon={ faArrowRight }  size={ 24 }/>
                </TouchableOpacity>
                <View style={postcodeStyles.postcodeContainer__protection}>
                    <FontAwesomeIcon style={postcodeStyles.postcodeContainer__protection__lockIcon} icon={ faLock } />
                    <Text style={postcodeStyles.postcodeContainer__protection__text}>
                        Safe | Secure | Privacy Protected
                    </Text>
                </View>
            </View>
        );
    }
}