
import React, {  useState } from 'react';
import { StyleSheet, TextInput, Button, Keyboard } from 'react-native';
import { Text, View, ImageBackground , ScrollView  } from 'react-native';

export default function VerseFinder () {
    const image = require('../assets/images/prayer.jpg')
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [verse, setVerse] = useState('john 3:16')

    const handleSearch = () => {
       
        if(verse.includes('-'))
        {
            var newVerse = verse.replace('-',':')
            fetch(`https://bible-api.com/${newVerse}`)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(true))
            Keyboard.dismiss
        }
        else {
            fetch(`https://bible-api.com/${verse}`)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(true))
            Keyboard.dismiss
        }
        
        
    }

    return (
       
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
            <ScrollView>
            <TextInput
                style={styles.input}
                placeholder="Search By Verse..... For eg: John 3:1 or 3-1"
                keyboardType='default'
                onChangeText={text => { setVerse(text) }} />
            <Button
                title="Search"
                onPress={handleSearch}
            />

            {isLoading && <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
            <Text style={styles.reference}>{data.reference}</Text>
                <Text style={styles.verse}>{data.text}</Text>
            </View>}
            </ScrollView>

        </View>
  


    )
}

const styles = StyleSheet.create({
    reference: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: '500'
    },
    verse: {
        fontSize: 16,
        textAlign: 'center'
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    input: {
        height: 50,
        width: 350,
        borderWidth: 0.2,
        marginTop: 20,
        borderRadius: 20,
        padding: 10,
        marginBottom: 40,
        marginLeft: 19
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
})

