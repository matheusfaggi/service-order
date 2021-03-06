import React, { useState } from 'react'
import { View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { StackNavigationProp } from '@react-navigation/stack'
import { useKeyboard } from '../../hooks/Keyboard'
import { AuthStack } from '../../routes/index'
import { AuthContainer, AuthForm, Title } from '../../styles/Auth'

type SignInScreenNavigationProp = StackNavigationProp<AuthStack, 'SignIn'>

type Props = {
  navigation: SignInScreenNavigationProp
}

const SignIn: React.FC<Props> = ({ navigation }: Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [keyboardHeight] = useKeyboard()

  return (
    <AuthContainer>
      <AuthForm
        style={{ bottom: keyboardHeight === 0 ? undefined : keyboardHeight }}>
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
          <Button title="Entrar" />
          <Button
            title="Cadastrar"
            onPress={() => {
              navigation.navigate('SignUp')
            }}
            type="clear"
          />
        </View>
      </AuthForm>
    </AuthContainer>
  )
}
export { SignIn }
