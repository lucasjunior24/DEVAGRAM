import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useCallback, useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';

import { RootStackParamList } from '../../routes/RootStackParams';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { styles } from './styles';
import { login, getCurrentUser } from '../../services/UserService';
import { communStyles } from '../../utils/communStyles';

export function Login() {
  type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Login'>
  const navigation = useNavigation<navigationTypes>();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [erro, setErro] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  
  const onLogin = async () => {
    try {
      setLoading(true);
      await login({ login: email, senha: password})
      setLoading(false);
      navigation.navigate('Home');
    } catch(error: any) {
      console.log(error);
      setErro("Erro ao efetuar login!")
      setLoading(false);
    }
  }

  useEffect(() => {
    verifyLogged();
  });

  const verifyLogged = useCallback(async () => {
    const user = await getCurrentUser();
    if(user?.token) {
      navigation.navigate('Home');
    }
  }, []);
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" hideTransitionAnimation='slide' />
      <Image style={styles.logo} source={require('../../../assets/icon.png')} />
      {erro != '' && <Text style={communStyles.textErro}>{erro}</Text>}
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
    <Button placeholder='Login' onPress={() => onLogin()} loading={loading} disabled={!email || !password} />

      <View style={styles.containerWithAccount}>
        <Text>Não possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textSignUp}>Faça seu cadastro agora!</Text>
        </TouchableOpacity>
      </View>
    </View> 
  );
}