import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';

import { RootStackParamList } from '../../routes/RootStackParams';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';
import { UploadImage } from '../../components/UploadImage';
import { Input } from '../../components/Input';
import { styles } from './styles';
import { communStyles } from '../../utils/communStyles';
import { validateConfirmPassword, validateEmail, validateName, validatePassword } from '../../utils/validations';

export function Register() {
  type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Register'>
  const navigation = useNavigation<navigationTypes>();

  const [erro, setErro] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [image, setImage] = useState<any>(null);

  function formIsValid() {
    const nameIsValid = validateName(name);
    const emailIsValid = validateEmail(email);
    const passwordIsValid = validatePassword(password);
    const confirmPasswordIsValid = validateConfirmPassword(password, confirmPassword);

    if(!nameIsValid && name != '') {
      setErro("Nome inválido")
    } else if(!emailIsValid && email != '') {
      setErro("E-mail inválido")
    } else if(!passwordIsValid && password != '') {
      setErro("Senha inválido")
    } else if(!confirmPasswordIsValid && confirmPassword != '') {
      setErro("Confirmação de Senha inválido")
    } else {
      setErro("")
    }

    return nameIsValid && emailIsValid && passwordIsValid && confirmPasswordIsValid;
  }

  useEffect(() => {
    formIsValid();
  }, [name, email, password, confirmPassword]);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <UploadImage image={image} setImage={setImage} />
      {erro != '' && <Text style={communStyles.textErro}>{erro}</Text>}
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
      <Button 
        placeholder='Cadastrar' 
        onPress={() => {}} 
        loading={false} 
        disabled={erro != '' || name == '' || email == '' || password == '' || confirmPassword == ''} />

      <View style={styles.containerWithAccount}>
        <Text>Já possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textSignIn}>Faça seu login agora!</Text>
        </TouchableOpacity>
      </View>
    </View> 
  );
}
