import { useState } from 'react'
import { View, Text } from 'react-native'


import CustomTextinput from '../../components/CustomTextinput'

const Login = () => {

const [emailAdd, setEmailAdd] = useState('');
const [password, setPassword] = useState('');
  return (
    <View style={{ flex: 1, padding: 20}}>
      
      {/* <Text>Email Address: {emailAdd}</Text>
      <Text>Password: {password}</Text> */}

      <CustomTextinput label={'Email Address'} placeholder={'Enter Email Address'} 
      containerStyle={{ 
        padding: 10,
      }}
      textStyle={{ borderRadius: 10, color: 'red', marginLeft: 15}} />
      <CustomTextinput label={'Password'} placeholder={'Enter Password'}
      containerStyle={{ 
        padding: 10,
        
      }}
      textStyle={{ borderRadius: 10, color: 'black', marginLeft: 15}}
       />
      

    </View>
  )
}

export default Login