import { createStackNavigator } from '@react-navigation/stack';
//SCREENS
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
//utils
import { ROUTES, IMG} from '../utils';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
    <Stack.Navigator initialRouteName={ROUTES.HOME}>
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Stack.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
    </Stack.Navigator>
    );
};

 export default () => {
    return (
        <NavigationContainer>
            <MainNavigation />
        </NavigationContainer>
    )
 }