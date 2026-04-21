import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES, IMG} from '../utils';
//SCREENS
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MidtermExam from '../screens/MidtermExam'



const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
    <Stack.Navigator initialRouteName={ROUTES.HOME}>
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} 
      />
      <Stack.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
      <Stack.Screen name={ROUTES.MIDTERM} component={MidtermExam} />
    </Stack.Navigator>
    );
};

export default MainNavigation;