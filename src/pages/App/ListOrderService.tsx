import React from 'react'
import { ScrollView, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Card, Paragraph, Subheading, Headline, Chip } from 'react-native-paper'
import { OrderStack } from '../../routes'

type CardOrderTypes = {
  title: string
  client: string
  price: string
  createdAt: string
  finishedAt: string
  status: string
  onPress?(): void
}
const data: CardOrderTypes[] = [
  {
    title: 'Titulo 01',
    client: 'Matheus Faggi',
    price: '160,00',
    createdAt: '10/01/2020',
    finishedAt: '-',
    status: 'aberto',
  },
  {
    title: 'Titulo 02',
    client: 'Ezequiel Alcantara',
    price: '160,00',
    createdAt: '10/01/2020',
    finishedAt: '10/02/2020',
    status: 'finalizado ',
  },
  {
    title: 'Titulo 03',
    client: 'Gabriel Reis',
    price: '160,00',
    createdAt: '10/01/2020',
    finishedAt: '10/02/2020',
    status: 'cancelado',
  },
  {
    title: 'Titulo 04',
    client: 'Chico Science',
    price: '160,00',
    createdAt: '10/01/2020',
    finishedAt: '10/02/2020',
    status: 'finalizado',
  },
  {
    title: 'Titulo 05',
    client: 'Gilberto Gil',
    price: '160,00',
    createdAt: '10/01/2020',
    finishedAt: '-',
    status: 'aberto',
  },
  {
    title: 'Titulo 06',
    client: 'Danilo Cutrim',
    price: '160,00',
    createdAt: '10/01/2020',
    finishedAt: '-',
    status: 'aberto',
  },
]

const CardOrder: React.FC<CardOrderTypes> = ({
  client,
  title,
  createdAt,
  finishedAt,
  price,
  onPress,
  status,
}: CardOrderTypes) => {
  return (
    <Card style={{ marginVertical: 8 }} onPress={onPress}>
      <Card.Content>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Headline>{title}</Headline>
          <Chip>{status}</Chip>
        </View>
        <Subheading>{client}</Subheading>
        <Subheading>Preço: R$ {price}</Subheading>
        <Paragraph>
          Abertura: {createdAt} - Finalização: {finishedAt}
        </Paragraph>
      </Card.Content>
    </Card>
  )
}

type OrderScreenNavigationProps = StackNavigationProp<
  OrderStack,
  'ListOrderService'
>

type Props = {
  navigation: OrderScreenNavigationProps
}

const ListOrderService: React.FC<Props> = ({ navigation }: Props) => {
  return (
    <ScrollView style={{ paddingVertical: 32, paddingHorizontal: 16 }}>
      {data.map((item: CardOrderTypes, index) => (
        <CardOrder
          {...item}
          key={index}
          onPress={() => {
            navigation.navigate('ShowOrderService')
          }}
        />
      ))}
      <View style={{ height: 50 }}></View>
    </ScrollView>
  )
}
export { ListOrderService }
