import React, { useState } from 'react'
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native'

import { Button, Input } from 'react-native-elements'
import { StackNavigationProp } from '@react-navigation/stack'
import { useKeyboard } from '../../hooks/Keyboard'
import { AuthStack } from '../../routes/index'
import { AuthContainer, AuthForm, Title } from '../../styles/Auth'

type SignUpScreenNavigationProp = StackNavigationProp<AuthStack, 'SignUp'>

type Props = {
  navigation: SignUpScreenNavigationProp
}

const SignUp: React.FC<Props> = ({ navigation }: Props) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  return (
    <AuthContainer>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <AuthForm>
          <Title>Cadastrar</Title>
          <Input
            value={name}
            onChangeText={(value) => setName(value)}
            placeholder="Digite o seu nome"
          />
          <Input
            value={email}
            onChangeText={(value) => setEmail(value)}
            placeholder="Digite o seu email"
          />
          <Input
            value={phone}
            onChangeText={(value) => setPhone(value)}
            placeholder="Digite o seu celular"
            keyboardType="phone-pad"
            maxLength={11}
          />
          <Input
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={true}
            placeholder="Digite sua senha"
          />
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              height: 90,
            }}>
            <Button title="Cadastrar" />
            <Button
              title="Já possuo uma conta"
              onPress={() => {
                navigation.navigate('SignIn')
              }}
              type="clear"
            />
          </View>
        </AuthForm>
      </TouchableWithoutFeedback>
    </AuthContainer>
  )
}
export { SignUp }
