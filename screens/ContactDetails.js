
import { Platform, StyleSheet ,Image,Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';


export default function ContactDetails({ navigation , route }) {

  const { contactname , address , photo , phoneNo , spouseName , spouseNo , email , kids  } = route.params;
  const goBackHandler = () => {
    navigation.navigate('Contacts')
  }

  const makeCall = (phoneNo) => {
    const url = 'telprompt:'+phoneNo;
    Linking.openURL(url);
  }

  const openMaps = (address) => {
    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
const label = address;
const url = Platform.select({
  ios: `${scheme}${label}`,
  android: `${scheme}(${label})`
});

    
Linking.openURL(url);
  }
  return (
          <View style={styles.container}>
      <Image
      style={styles.tinyLogo}
      source={{
        uri: photo,
      }}
      />
      <View style={styles.detailsContainer}>

       <View style={styles.nameContainer}>
      <Text style={styles.nameLabel}>Name</Text>
      <Text style={styles.contactName}>{contactname}</Text>
      </View>


      <View style={styles.nameContainer}>
      <Text style={styles.nameLabel}>Spouse Name</Text>
      <Text style={styles.contactName}>{spouseName}</Text>
      </View>

      
      <View style={styles.nameContainer}>
      <Text style={styles.nameLabel}>Children</Text>
      <Text style={styles.contactName}>{kids}</Text>
      </View>

      <View style={styles.nameContainer}>
      <Text style={styles.nameLabel}>Address</Text>
      <Text style={styles.addressName} onPress={() => openMaps(address)}>{address}{' '}
      <FontAwesome style={styles.callIcon} name='location-arrow'></FontAwesome>
      </Text>
      </View>

      <View style={styles.nameContainer}>
      <Text style={styles.nameLabel}>Phone Num</Text>
      <Text style={styles.contactNumber}  onPress={() => makeCall(phoneNo)}>{phoneNo}{'    '}

      <FontAwesome style={styles.callIcon} name='phone'></FontAwesome>
      </Text>
      </View>

      <View style={styles.nameContainer}>
      <Text style={styles.nameLabel}>Spouse Num</Text>
      <Text style={styles.contactNumber} onPress={() => makeCall(spouseNo)}>{spouseNo}{'    '}
      <FontAwesome style={styles.callIcon} name='phone'></FontAwesome>
      </Text>
      </View>

      <View style={styles.nameContainer}>
      <Text style={styles.nameLabel}>Email</Text>
      <Text style={styles.contactName}>{email}</Text>
       </View>

      
      </View>
       <Text style={styles.goback} onPress={() => goBackHandler()}>Go Back</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: '90%',
    height : '30%',
    resizeMode: 'contain'
  },
  goback: {
    color : 'blue',
    paddingTop: 20,
    fontWeight : '700',
    letterSpacing : 2
  },
  detailsContainer: {
     marginTop: 10,
  },
  contactName: {
    fontWeight : '600',
    fontSize : 15,
    width: 400,
    paddingLeft : 100,
    paddingTop : -20
  },
  nameContainer: {
   borderWidth : .2,
   width :500,
   borderColor : 'grey',
   height : 60
  },
  addressName: {
    fontWeight : '600',
    fontSize : 15,
    marginBottom: 12,
    width: 400,
    color: 'blue',
    paddingLeft: 100
  },

  contactNumber: {
    color: 'blue',
    fontWeight : '600',
    fontSize : 15,
    marginBottom: 12,
    paddingLeft: 100
  },
  nameLabel: {
     color: 'grey',
     marginBottom : 5,
     paddingLeft : 100,
  },
  callIcon: {
    fontSize : 18,  
    color : 'black'
  }
});
