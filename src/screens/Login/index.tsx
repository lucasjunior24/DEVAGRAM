import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';

import { RootStackParamList } from '../../routes/RootStackParams';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { styles } from './styles';

export function Login() {
  type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Login'>
  const navigation = useNavigation<navigationTypes>();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" hideTransitionAnimation='slide' />

      <Image style={styles.logo} source={require('../../../assets/icon.png')} />
      <Input
        placeholder='Digite seu E-mail'
        value={email} 
        onChange={(e: string) => setEmail(e)}
      />
      <Input
        placeholder='Digite sua senha'
        value={password} 
        secureTextEntry={true}
        onChange={(e: string) => setPassword(e)}
      />
      <Button placeholder='Login' onPress={() => {}} loading={false} disabled={false} />

      <View style={styles.containerWithAccount}>
        <Text>Não possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textSignUp}>Faça seu cadastro agora!</Text>
        </TouchableOpacity>
      </View>
    </View> 
  );
}
