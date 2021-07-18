import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Text, View, StyleSheet, TouchableHighlight } from 'react-native'

const availableZipItems = [
    { place: 'PLACE',     code: 'CODE'  },
    { place: 'Hatyai',    code: '90110' },
    { place: 'Trang',     code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen',  code: '40000' },
    { place: 'Chonburi',  code: '20000' },
]
   
const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', {zipCode: code})
    }}>
        <View style={styles.zipItem}>
            <Text style={styles.Place}>{place}</Text>
            <Text style={styles.Code}>{code}</Text>
        </View>
    </TouchableHighlight>
)

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <FlatList
            data = {availableZipItems}
            keyExtractor = {item => item.code}
            renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
        />
    )
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: '1.3%',
        
    },
    zipPlace: {
        flex: 1,

    },
    zipCode: {
        flex: 1,

    },
    Place: {
        fontSize: 20,
        //color: 'white',
        marginBottom: 30,
        marginTop: 30,
        //textAlign: 'center',

    },
    Code: {
        fontSize: 20,
        //color: 'white',
        marginBottom: 30,
        marginTop: 30,
        //textAlign: 'center',


    }
})