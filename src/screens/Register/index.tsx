import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

import { Button } from '../../components/Button';
import { UploadImage } from '../../components/UploadImage';
import { Input } from '../../components/Input';
import { styles } from './styles';
import { RootStackParamList } from '../../routes/RootStackParams';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

export function Register() {
  type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Register'>
  const navigation = useNavigation<navigationTypes>();

  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [image, setImage] = useState<any>(null);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <UploadImage image={image} setImage={setImage} />
      {/* <Image style={styles.logo} source={require('../../../assets/icon.png')} /> */}
      <Input
        placeholder='Digite seu Nome completo'
        value={name} 
        onChange={(e: string) => setName(e)}
      />
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
      <Input
        placeholder='Confirme sua senha'
        value={confirmPassword} 
        secureTextEntry={true}
        onChange={(e: string) => setConfirmPassword(e)}
      />
      <Button placeholder='Cadastrar' onPress={() => {}} loading={false} disabled={false} />

      <View style={styles.containerWithAccount}>
        <Text>Já possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textSignIn}>Faça seu login agora!</Text>
        </TouchableOpacity>
      </View>
    </View> 
  );
}
