import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
//import { Colors } from 'react-native/Libraries/NewAppScreen';
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0  
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=1649b0b7a1902f5cebe795826425551d`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp });
                })
            .catch((error) => {
                console.warn(error);
            });   
        }   
    }, [props.zipCode])//พารามิเตอร์ตัวที่สอง ถ้าเป็นพารามิเตอร์ตัวแรกคือส่วนของปีกกาข้างใน


    return(
        <View>
            <ImageBackground source={require('../BackG.jpg')} style={styles.backdrop}>
                <Text style={styles.Text}>Zip Code</Text>
                <Text style={styles.Text}>{props.zipCode}</Text>
                <Forecast {...forecastInfo}/>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
              
    },
    Text: {
        fontSize: 20,
        color: 'black',
        marginBottom: 30,
        marginTop: 30
    }
})

