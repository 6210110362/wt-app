import React from 'react';
import { Text } from 'react-native';

export default function weather(props) {
    return(
        <Text>{props.zipCode}</Text>
    )
}