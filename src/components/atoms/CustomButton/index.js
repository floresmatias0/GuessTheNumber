import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import {styles} from './styles';

const CustomButton = ({onPress, text, buttonText, buttonContainer}) => {
    return (
        <TouchableOpacity onPress={onPress} style={buttonContainer ? buttonContainer : styles.buttonContainer}>
            <Text style={buttonText ? buttonText : styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton;