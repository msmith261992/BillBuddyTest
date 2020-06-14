import React from 'react';
import {TextInput} from 'react-native';

import InputStyles from '../styles/components/textInput.scss';

let postcode = null;

export default class InputText extends React.Component {
    render() {
        return (
            <TextInput style={InputStyles.input} placeholder={this.props.placeholder} value={this.props.value}  />
        )
    }
}