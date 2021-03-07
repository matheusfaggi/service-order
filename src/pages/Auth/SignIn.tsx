import React, { useContext, useState } from 'react'
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { StackNavigationProp } from '@react-navigation/stack'

import { AuthStack, RootStack } from '../../routes/index'
import { AuthContainer, AuthForm, Title } from '../../styles/Auth'
import { AuthContext } from '../../contexts/index'

type SignInScreenNavigationProp = StackNavigationProp<AuthStack, 'SignIn'>
type RootScreenNavigationProp = StackNavigationProp<RootStack, 'App'>

type Props = {
  navigation: SignInScreenNavigationProp
  successNavigation: RootScreenNavigationProp
}

const SignIn: React.FC<Props> = ({ navigation, successNavigation }: Props) => {
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
            onChangeText={(value) => setEmail(value)}
            keyboardType="email-address"
            placeholder="Digite o seu email"
          />
          <Input
            value={password}
            onChangeText={(value) => setPassword(value)}
            keyboardType="email-address"
            placeholder="Digite sua senha"
          />
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              height: 90,
            }}>
            <Button
              title="Entrar"
              onPress={() => {
                SignIn()
              }}
            />
            <Button
              title="Cadastrar"
              onPress={() => {
                navigation.navigate('SignUp')
              }}
              type="clear"
            />
          </View>
        </AuthForm>
      </TouchableWithoutFeedback>
    </AuthContainer>
  )
}
export { SignIn }
