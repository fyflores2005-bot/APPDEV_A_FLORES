import { useState } from 'react'
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native'


import CustomTextinput from '../../components/CustomTextinput'
import CustomButtton from '../../components/CustomButtton'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../../utils'

const Login = () => {

const [emailAdd, setEmailAdd] = useState('');
const [password, setPassword] = useState('');


const navigations = useNavigation();
  return (
    <View style={{
     flex: 1,
     padding: 20,
     alignItems: 'center',
     justifyContent: 'center' }}>
     
      {/* <Text>Email Address: {emailAdd}</Text>
      <Text>Password: {password}</Text> */}

     <View style={{
      width: '100%',
      }}>
    

      <CustomTextinput label={'Email Address'} 
      placeholder={'Enter Email Address'} 
      value={(val) => setEmailAdd(val)}
      containerStyle={{ 
        padding: 10,
      }}
      textStyle={{ borderRadius: 10, color: 'red', marginLeft: 15}} />

      <CustomTextinput label={'Password'}
       placeholder={'Enter Password'}
       value={(val) => setPassword(val)}
       containerStyle={{ 
        padding: 10,
        
      }}
      textStyle={{ borderRadius: 10, 
        color: 'black', 
        marginLeft: 15}}
       />
     </View>

      <CustomButtton label={'LOG IN'} 
      containerStyle={{   
      borderWidth:1, 
      borderRadius: 10,
      marginVertical: 20,
      backgroundColor: 'blue',
      width: '85%',
      
      }} 
      textsStyle={{ color: 'white', 
        fontWeight: 'bold'}}

      onPress={() => {
        if (emailAdd === '' || password === '') {
          Alert.alert(
            'Invalid Credentials', 
            'Please enter valid email address and password');

            return;
        }
      }}
       />

       <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',}}>
            
            
        <Text> Create an Account </Text>
        
        <TouchableOpacity onPress={() => navigations.navigate(ROUTES.REGISTER)}>
            
          <Text style={{color: 'red',
             fontWeight: 'bold',
             marginLeft: 10,
             }}> Register </Text>   

        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Login