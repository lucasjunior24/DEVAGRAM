import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { Button } from './src/components/Button';
import { Input } from './src/components/Input';
import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState<string>('');

  const [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  return (
    fontsLoaded ? 
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Input 
        placeholder='Digite seu E-mail'
        value={email} 
        onChange={(e: string) => setEmail(e)}
      />
      <Button placeholder='Salvar' onPress={() => {}} loading={false} disabled={false} />
    </View> : <AppLoading />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
