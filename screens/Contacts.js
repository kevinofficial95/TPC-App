
import { useState } from 'react';
import {  ScrollView, StyleSheet, TextInput, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import Login from './Login';
import { useNavigation } from '@react-navigation/native';

export default function Contacts() {

  const [showContacts, setShowContacts] = useState(false)

  //const navigation = useNavigation()

  const navigation = useNavigation()

  let contactsArray = require('../constants/Contacts.json');
  const [filteredArray, setfilteredArray] = useState(contactsArray);

  const handleSearch = (text) => {
    setfilteredArray(contactsArray.filter(i => i.Name.toLowerCase().includes(text) || i.SpouseName.toLowerCase().includes(text)))
    //setfilteredArray(contactsArray.filter(i => i.Name.toLowerCase().includes(text)))
  }

  const handleContactClick = (name, address, Photo, phoneNo, spouseName, spouseNo, email, kids) => {
    navigation.navigate('ContactDetails', { contactname: name, address: address,
      photo: Photo, phoneNo: phoneNo, spouseName: spouseName, spouseNo: spouseNo, email: email, kids: kids })
  }

  return (

    <>
    {!showContacts && <View style={styles.LoginContainer}>
      <ScrollView >
      <Login setShowContacts={setShowContacts}></Login>
      </ScrollView>
      
    </View>}

    {showContacts && <View style={styles.DirectoryContainer}>
        <ScrollView>
          <TextInput
            style={styles.input}
            placeholder="Search By Name....."
            keyboardType="name-phone-pad"
            onChangeText={text => { handleSearch(text) }} />
          {filteredArray.map((item, i) => {
            return (
              <View style={styles.contactview}
                key={i}
              >

                <Image
                  key={i + 1}
                  style={styles.tinyLogo}
                  source={{
                    uri: item.Photo,
                  }} />
                <Text key={i + 2} style={styles.contacts} onPress={() => handleContactClick(item.Name, item.Address, item.Photo, item.PhoneNumber,
                  item.SpouseName, item.SpousePhNo, item.email, item.kids)}>
                  {item.Name}
                </Text>
              </View>

            );


          }
          )}
        </ScrollView>
    </View>}
      </>
  )
  
}

const styles = StyleSheet.create({
  LoginContainer: {
    flex: 1
  },
  DirectoryContainer: {
    flex: 1
  },
  contacts: {
    borderWidth: 0.16,
    marginTop: -55,
    height: 100,
    width: 400,
    paddingTop: 26,
    fontWeight: '500',
    fontSize: 15,
    paddingLeft: 110
  },
  input: {
    height: 50,
    width: 350,
    borderWidth: 0.2,
    marginTop: 20,
    borderRadius: 20,
    padding: 10,
    marginBottom: 40
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginLeft: 40,
    marginBottom: -5,
  },
  contactview: {
    height: 70,
    marginTop: 0,
  }
});

