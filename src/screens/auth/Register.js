import { useState } from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'

import CustomTextinput from '../../components/CustomTextinput'
import CustomButtton from '../../components/CustomButtton'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../../utils'

const Register = () => {
  // 1. Added more state variables for registration
  const [fullName, setFullName] = useState('');
  const [emailAdd, setEmailAdd] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigations = useNavigation();

  return (
    <View style={{
      flex: 1,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center'
    }}>

      <View style={{ width: '100%' }}>
        
        {/* Full Name Field */}
        <CustomTextinput 
          label={'Full Name'} 
          placeholder={'Enter Full Name'} 
          value={(val) => setFullName(val)}
          containerStyle={{ padding: 10 }}
          textStyle={{ borderRadius: 10, color: 'black', marginLeft: 15 }} 
        />

        {/* Email Field */}
        <CustomTextinput 
          label={'Email Address'} 
          placeholder={'Enter Email Address'} 
          value={(val) => setEmailAdd(val)}
          containerStyle={{ padding: 10 }}
          textStyle={{ borderRadius: 10, color: 'black', marginLeft: 15 }} 
        />

        {/* Password Field */}
        <CustomTextinput 
          label={'Password'}
          placeholder={'Enter Password'}
          value={(val) => setPassword(val)}
          containerStyle={{ padding: 10 }}
          textStyle={{ borderRadius: 10, color: 'black', marginLeft: 15 }}
        />

        {/* Confirm Password Field */}
        <CustomTextinput 
          label={'Confirm Password'}
          placeholder={'Re-enter Password'}
          value={(val) => setConfirmPassword(val)}
          containerStyle={{ padding: 10 }}
          textStyle={{ borderRadius: 10, color: 'black', marginLeft: 15 }}
        />
      </View>

      {/* Register Button */}
      <CustomButtton 
        label={'REGISTER'} 
        containerStyle={{   
          borderWidth: 1, 
          borderRadius: 10,
          marginVertical: 20,
          backgroundColor: 'blue',
          width: '85%',
        }} 
        textsStyle={{ color: 'white', fontWeight: 'bold' }}
        onPress={() => {
          // Validation Logic
          if (fullName === '' || emailAdd === '' || password === '') {
            Alert.alert('Error', 'Please fill in all fields');
            return;
          }
          if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
          }
          
          Alert.alert('Success', 'Account Created Successfully!');
          navigations.navigate(ROUTES.LOGIN); // Navigate back to login
        }}
      />

      
      {/* <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text> Already have an account? </Text>
        <TouchableOpacity onPress={() => navigations.navigate(ROUTES.LOGIN)}>
          <Text style={{
            color: 'red',
            fontWeight: 'bold',
            marginLeft: 10,
          }}> Login </Text>   
        </TouchableOpacity>
      </View> */}

    </View>
  )
}

export default Register