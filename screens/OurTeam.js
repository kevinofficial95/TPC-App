import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { ScrollView, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';
import Login from './Login';

export default function OurTeam () {

  const navigation = useNavigation()
  const [showContacts, setShowContacts] = useState(false)


  let contactsArray = require('../constants/OurTeam.json');
     const[filteredArray,setfilteredArray] = useState(contactsArray);

      const handleSearch = (text) => {
          setfilteredArray(contactsArray.filter(i => i.Name.toLowerCase().includes(text)))
     }

  const handleContactClick = (name,address,Photo,phoneNo,spouseName,spouseNo,email,kids) => {
    navigation.navigate("ContactDetails", {contactname : name,address : address, photo : Photo, phoneNo : phoneNo,spouseName : spouseName,
    spouseNo : spouseNo,email : email,kids : kids})
  }
  return (<>
    {!showContacts && <View style={styles.LoginContainer}>
      <ScrollView >
      <Login setShowContacts={setShowContacts}></Login>
      </ScrollView>
      
    </View>}

     {showContacts && <ScrollView style={styles.scrollView}>
      <View style={styles.container}>

        <TextInput
          style={styles.input}
          placeholder="Search By Name....."
          keyboardType="name-phone-pad"
          onChangeText={text => { handleSearch(text) }}

        />
        {filteredArray.map((item,i) => {
          return (
            <View style={styles.contactview}
            key={i}
            >
              <Text style={styles.position}>{item.Position}</Text>
              <Text  key={i+2} style={styles.contacts}  onPress={() => handleContactClick(item.Name,item.Address,item.Photo,item.PhoneNumber,
                item.SpouseName,item.SpousePhNo,item.email,item.kids)}>
                {item.Name}
              </Text>
            </View>
          )
        }
        )}
      </View>
    </ScrollView>}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LoginContainer: {
    flex: 1
  },
  scrollView: {
  },
  position: {
    textAlign : 'center',
    letterSpacing : 0,
    marginTop : 10,
    fontWeight : 'bold'
  },
  contacts: {
    textAlign : 'center',
    marginTop : 5,
    fontWeight : '400'
  
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
  contactview: {
  height : 70,
  marginTop: 0,
  borderWidth : .17,
  borderColor :'grey',
  width : 500

  }
});
