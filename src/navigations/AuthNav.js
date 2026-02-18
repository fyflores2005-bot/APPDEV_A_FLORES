import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES, IMG} from '../utils';
//SCREENS
import Login from '../screens/auth/Login';



const Stack = createStackNavigator();

const AuthNavigation = () => {
    return (
    <Stack.Navigator initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
    </Stack.Navigator>
    );
};

export default AuthNavigation;
