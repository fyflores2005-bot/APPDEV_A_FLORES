import {Image, Text, TouchableOpacity, View } from 'react-native';
import {IMG, ROUTES} from '../utils';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

const navigations = useNavigation();
    return (
         
        <View style={{ flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3, borderColor: 'red' }}>
            <Image style={{ width: 200, height: 200 }} source={{ uri: IMG.LOGO }} />       
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Home Screen</Text>

            <TouchableOpacity onPress={() => navigations.navigate(ROUTES.PROFILE)}>  
                <View style={{ backgroundColor: 'blue', padding: 10, borderRadius: 99}}>
                    <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'white' }}> GO TO PROFILE</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;