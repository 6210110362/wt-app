import React  from 'react';
import { StyleSheet, Text,  View } from 'react-native';

export default function Forecast(props) {
    return(
        <View>
            <Text style={styles.TextMain}>{props.main}</Text>
            <Text style={styles.Text}>{props.description}</Text>
            <Text style={styles.TextTemp}>{props.temp}<Text style={styles.TextBase}>°C</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        marginBottom: 60
    },
    TextTemp:{
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'bottom',
    },
    TextBase: {
        fontSize: 13,
        textAlign: 'center',
        color: 'white',
        textAlignVertical: 'top',
        
    },
    TextMain: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        marginBottom: 60
    }
})