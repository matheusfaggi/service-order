import React, { useContext, useState } from 'react'
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { StackNavigationProp } from '@react-navigation/stack'

import { AuthStack, RootStack } from '../../routes/index'
import { AuthContainer, AuthForm, Title, Input } from '../../styles/Auth'
import { AuthContext } from '../../contexts/index'

type SignInScreenNavigationProp = StackNavigationProp<AuthStack, 'SignIn'>

type Props = {
  navigation: SignInScreenNavigationProp
}

const SignIn: React.FC<Props> = ({ navigation }: Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { SignIn } = useContext(AuthContext)
  return (
    <AuthContainer>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <AuthForm>
          <Title>Entrar</Title>
          <Input
            value={email}
            onChangeText={(value: string) => setEmail(value)}
            keyboardType="email-address"
            placeholder="Digite o seu email"
            label="Email"
          />
          <Input
            label="Senha"
            value={password}
            onChangeText={(value: string) => setPassword(value)}
            placeholder="Digite sua senha"
            secureTextEntry={true}
          />
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              height: 90,
            }}>
            <Button
              mode="contained"
              onPress={() => {
                SignIn()
              }}>
              Entrar
            </Button>
            <Button
              onPress={() => {
                navigation.navigate('SignUp')
              }}
              mode="text">
              Cadastre-se
            </Button>
          </View>
        </AuthForm>
      </TouchableWithoutFeedback>
    </AuthContainer>
  )
}
export { SignIn }
