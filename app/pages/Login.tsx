import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../shared/colors';


export default function Login() {
  return (
    <View style={styles.containerTop}>
         <Image
          source={require('../../assets/images/login.png')}
         style={styles.imgContainer}
        />
    <View style={styles.container}>
      <Text style={styles.WelcomeText}>Welcome to Guide Courses</Text>
      <Text style={{textAlign:"center",marginTop:80, fontSize:25}}>Login/Signup</Text>
      <View style={styles.button}>
      <Ionicons name="logo-google" size={24} color="white" style={{marginRight:10}} />
        <Text style={{color: colors.white}}>Sign In with Google</Text>
      </View>
    </View>
 </View>
  )
}
const styles = StyleSheet.create({
    container:{
     paddingTop:40,
     flex: 1,
      marginTop: -25,
      backgroundColor:"white",
      borderTopRightRadius:30,
      borderTopLeftRadius:30,
     
    },
    containerTop:{
        flex: 1,
        marginTop:48
    },
    WelcomeText:{
        fontSize:35,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        marginTop: 30,
    },
    imgContainer:{
        width: 440,
        height: 250,
    },
    button:{
        backgroundColor: colors.primary, 
        padding:10,
        margin:40,
        display: 'flex',
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
},
  });

