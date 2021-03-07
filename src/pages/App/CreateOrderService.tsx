import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import styled from 'styled-components'

const Input = styled(TextInput).attrs({
  mode: 'outlined',
})`
  margin-top: 8;
  margin-bottom: 8;
`
const CreateOrderService: React.FC = () => {
  const [clientEmail, setClientEmail] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  return (
    <View style={{ paddingHorizontal: 16, paddingVertical: 32 }}>
      <Text style={{ fontSize: 32, textAlign: 'center', marginBottom: 16 }}>
        Cadastro de ordem
      </Text>
      <View>
        <Input
          label="Cliente"
          placeholder="digite o email do cliente"
          value={clientEmail}
          onChangeText={(value) => setClientEmail(value)}
          keyboardType="email-address"
        />
        <Input
          label="Descrição"
          placeholder="digite uma breve descrição do serviço"
          value={description}
          onChangeText={(value) => setDescription(value)}
        />
        <Input
          label="Preço"
          value={price}
          onChangeText={(value) => setPrice(value)}
          placeholder="digite o preço do serviço"
          keyboardType="decimal-pad"
        />
        <Button mode="contained">Cadastar</Button>
      </View>
    </View>
  )
}
export { CreateOrderService }
