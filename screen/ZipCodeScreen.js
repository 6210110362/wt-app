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
        //justifyContent: 'space-evenly',
        //margin: '1.3%',
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
        //textAlign: 'center',
        //paddingHorizontal: 200,
        //paddingLeft:80,
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
        
        //backgroundColor: 'red'
    }
})