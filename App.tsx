import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from '@react-navigation/native';

import { Routes } from './src/routes/index';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  return (
    fontsLoaded ? 
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
    : <AppLoading />
  );
}

