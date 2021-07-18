# Lab3SA04

แลปนี้เป็นการใช้งานเกี่ยวกับ React native

## App.js

``` js
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import WeatherScreen from './screen/WeatherScreen';
import ZipCodeScreen from './screen/ZipCodeScreen';
import { StyleSheet,  View } from 'react-native';
import Constant from 'expo-constants';
//import Navigation from './components/Navigation';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ZipCodeScreen}/>
        <Stack.Screen name="Weather" component={WeatherScreen}/>
      </Stack.Navigator>
        <View style={styles.container}>
        <StatusBar style="auto" /> 
      </View>
    </NavigationContainer>
  );
}
/*เพิ่มสเตตัสบาร*/

const styles = StyleSheet.create({
  container: {
      paddingTop: Constant.statusBarHeight,
  }
});
 
```

จาก code บางส่วน ของข้างบน เป็นการแสดงส่วน Bar ของ ชื่อแต่ละหน้าในหน้าแอพ โดยมีการเพิ่มโค้ดเพื่อให้แสดง แถบของข้อมูลของแอพ

## ZipCodeScreen.js

``` js
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Text, View, StyleSheet, TouchableHighlight } from 'react-native'


const availableZipItems = [
    { Header1: 'PLACE',     Header2: 'CODE'  },
    { place: 'Hatyai',    code: '90110' },
    { place: 'Trang',     code: '92000' },
    { place: 'Pattani',   code: '94110' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen',  code: '40000' },
    { place: 'Chonburi',  code: '20000' },
]
   
const ZipItem = ({place, code, navigation, Header1, Header2}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', {zipCode: code})
    }}>
        <View style={styles.zipItem}>
            <Text style={styles.Place}>{place}
                <Text style={styles.TextHead}>{Header1}</Text>
            </Text>
            <Text style={styles.Code}>{code}
                <Text style={styles.TextHead}>{Header2}</Text>
            </Text>
            
        </View>
    </TouchableHighlight>
)

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <View>
            <FlatList
                data = {availableZipItems}
                keyExtractor = {item => item.code}
                renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomWidth: .5
        
    },
    zipPlace: {
        flex: 1,

    },
    zipCode: {
        flex: 1,

    },
    Place: {
        flex: 1,
        fontSize: 20,
        marginTop: 30,
        paddingStart: 230
    },
    Code: {
        flex: 1,
        fontSize: 20,   
        marginBottom: 30,
        marginTop: 30,
    },
    TextHead: {
        flex: 1,
        fontSize: 25,   
        marginBottom: 30,
        marginTop: 30,
    }
})
```

ส่วนของ code ZipCodeScreen.js เป็นส่วนในการกำหนดว่าในหน้า Home ต้องการมีข้อมูลของจังหวัดอะไรบ้าง และยังสามารถกดบนข้อมูลของจังหวัดนั้นๆ เพื่อเข้าไปดูสภาพอากาศของจังหวัดนั้นๆได้อักด้วย


## WeatherScreen.js

``` js
import React from 'react'
import { View } from 'react-native'
import Weather from '../components/Weather'

export default function WeatherScreen({route}){
    return(
        <View>
            <Weather zipCode={route.params.zipCode}/>
        </View>
    )
}
```

code ในส่วนของไฟล์ WeatherScreen.js คือากร route ของ zipCode ที่อยู่ในไฟล์ของ Weather.js เพื่อแสดงใรส่วนของ code แต่ละจังหวัด

## Weather.js
``` js
import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
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



```

code ในส่วนของไฟล์ Weather.js คือ การแสดงข้อมูลอุณภูมิของจังหวัดนั้นๆ โดยมีการอ่านข้อมูล ของอุณหภูมิผ่านเว็บไซต์ OpenWeather และยังเป็นส่วนที่ใส่ Background ให้แก่ข้อมูลอีกด้วย

## Foreccast.js

``` js
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
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginBottom: 60
    },
    TextTemp:{
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'bottom',
        marginBottom: 60
    },

    TextMain: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        marginBottom: 60
    }
})

```

จาก code ของไฟล์ Forecast.js เป็น code เป็นการตกแต่งและเพิ่มข้อความให้แก่ไฟล์ Weather.js


## Name-ID
ชื่อ นางสาวสะอาดะห์ ดายันตา

รหัสนักศึกษา 6210110362

section 01



