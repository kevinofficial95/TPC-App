
import { ScrollView, StyleSheet, TextInput, TouchableOpacity , ImageBackground  } from 'react-native';
import { Text, View } from '../components/Themed';
import { useState } from 'react';


export default function Login({ setShowContacts }) {


  const image = require('../assets/images/group.jpg')
  let contactsArray = require('../constants/Contacts.json');

  const password = 'tpc'
  const [passwordText, setPasswordText] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [postCode, setPostCode] = useState('')
  const [info, setInfo] = useState(false)



  const handleLoginClick = () => {
         
    contactsArray.map(item => {
      if ((item.postcode == postCode.toUpperCase()) && (passwordText == password)) {
        setShowContacts(true)
      }
      else 
      {
        setInfo(true)
      }
    })
  }


  return (
    <View style={styles.container}>
      <ScrollView>
      <ImageBackground source={image} style={{
    width: "100%",
    height: 190,
    marginBottom : 20
  }}
  ></ImageBackground>
      {/* <TextInput
        style={styles.phoneNumber}
        placeholder="  Enter Your Phone Number Registered With Church..."
        keyboardType="default"
        onChangeText={text => { setPhoneNumber(text) }}
      /> */}
      <TextInput
        style={styles.postCode}
        placeholder="  Enter Your Postcode..."
        keyboardType="default"
        onChangeText={text => { setPostCode(text) }}
      />
      <TextInput
        style={styles.password}
        placeholder="  Enter Your Password..."
        keyboardType="default"
        onChangeText={text => { setPasswordText(text) }}
        secureTextEntry={true}
      />

      {info && <Text style={styles.info}>Entered Info is incorrect. Please Try Again</Text>}

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleLoginClick()}
      >
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
   flex : 1
  },
  button: {
    paddingVertical: 17,
    paddingHorizontal: 55,
    borderRadius: 20,
    backgroundColor: '#eb5d0c',
    width : '50%',
    alignSelf : 'center',
    marginTop : 110
    
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textAlign : 'center'
  },
  password: {
    height: 50,
    width: 350,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 0,
    display : 'flex',
    alignSelf : 'center',
    top : 50
  },
  info: {
    display : 'flex',
    alignSelf : 'center',
    top : 70,
    color : 'red'
  },
  phoneNumber: {
    height: 50,
    width: 350,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 0,
    display : 'flex',
    alignSelf : 'center'
  },
  postCode: {
    height: 50,
    width: 350,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 0,
    display : 'flex',
    alignSelf : 'center',
    top : 30
  }
})
