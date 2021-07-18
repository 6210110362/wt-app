import React  from 'react';
import { StyleSheet, Text,  View } from 'react-native';

export default function Forecast(props) {
    return(
        <View>
            <Text style={styles.TextMain}>{props.main}</Text>
            <Text style={styles.Text}>{props.description}</Text>
            <Text style={styles.TextTemp}>{props.temp}°C</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Text: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        marginBottom: 60
    },
    TextTemp:{
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'bottom',
        marginBottom: 60
    },
    /*TextBase: {
        fontSize: 13,
        textAlign: 'center',
        color: 'white',
       // textAlignVertical: 'bottom',
        
    },*/
    TextMain: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        marginBottom: 60
    }
})