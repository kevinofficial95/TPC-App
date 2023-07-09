import React, { useEffect, useState } from 'react';
import { StyleSheet} from 'react-native';

import {  Text, View,ImageBackground } from 'react-native';

export default function VerseOfDay () {
    const image = require('../assets/images/prayer.jpg')
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://beta.ourmanna.com/api/v1.json')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

  return (
 <View style={styles.container}>
     <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column' , justifyContent: 'center'}}>
          <Text style={styles.reference}>{data.verse.details.reference}</Text>
          <Text style={styles.verse}>"{data.verse.details.text}"</Text>
        </View>
      )}
    </View>
  
  
  )
}

const styles = StyleSheet.create({
  reference: {
     fontSize : 20,
     textAlign :'center',
     marginBottom : 10,
     fontWeight : '500'
},
image: {
    flex: 1,
    justifyContent: "center"
  },
verse: {
  fontSize : 16,
  textAlign : 'center'
},
container: {
flex :1,
}
});

