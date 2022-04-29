import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';

export const Routes = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{headerShown: false}}
          >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>

    );
}  

