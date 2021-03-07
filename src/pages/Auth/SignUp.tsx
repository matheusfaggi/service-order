import React, { useState } from 'react'
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native'

import { Button } from 'react-native-paper'
import { StackNavigationProp } from '@react-navigation/stack'
import { AuthStack } from '../../routes/index'
import { AuthContainer, AuthForm, Title, Input } from '../../styles/Auth'

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
            onChangeText={(value: string) => setName(value)}
            placeholder="Digite o seu nome"
          />
          <Input
            value={email}
            onChangeText={(value: string) => setEmail(value)}
            placeholder="Digite o seu email"
          />
          <Input
            value={phone}
            onChangeText={(value: string) => setPhone(value)}
            placeholder="Digite o seu celular"
            keyboardType="phone-pad"
            maxLength={11}
          />
          <Input
            value={password}
            onChangeText={(value: string) => setPassword(value)}
            secureTextEntry={true}
            placeholder="Digite sua senha"
          />
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              height: 90,
            }}>
            <Button mode="contained">Cadastrar</Button>
            <Button
              onPress={() => {
                navigation.navigate('SignIn')
              }}
              mode="text">
              Já possuo conta
            </Button>
          </View>
        </AuthForm>
      </TouchableWithoutFeedback>
    </AuthContainer>
  )
}
export { SignUp }
