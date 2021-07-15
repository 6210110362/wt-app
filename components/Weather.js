import React, {useState } from 'react';
import { ImageBackground, StyleSheet, Text } from 'react-native';
//import { Colors } from 'react-native/Libraries/NewAppScreen';
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0  
    })

    return(
        <ImageBackground source={require('../BackG.jpg')} style={styles.backdrop}>
            <Text style={styles.Text}>{props.zipCode}</Text>
            <Forecast {...forecastInfo}/>
        </ImageBackground>
    
    )
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingRight: 0,
        backgroundColor: 'black',
              
    },
    Text: {
        fontSize: 20,
        color: 'white',
        marginBottom: 30,
        marginTop: 30
      }
})

