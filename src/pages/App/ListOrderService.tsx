import React from 'react'
import { ScrollView } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Card, Paragraph, Subheading, Headline } from 'react-native-paper'
import { OrderStack } from '../../routes'

type CardOrderTypes = {
  title: string
  client: string
  price: string
  createdAt: string
  finishedAt: string
  onPress?(): void
}
const data: CardOrderTypes[] = [
  {
    title: 'Titulo 01',
    client: 'Matheus Faggi',
    price: '160,00',
    createdAt: '10/01/2020',
    finishedAt: '10/02/2020',
  },
  {
    title: 'Titulo 02',
    client: 'Matheus Faggi',
    price: '160,00',
    createdAt: '10/01/2020',
    finishedAt: '10/02/2020',
  },
  {
    title: 'Titulo 03',
    client: 'Matheus Faggi',
    price: '160,00',
    createdAt: '10/01/2020',
    finishedAt: '10/02/2020',
  },
  {
    title: 'Titulo 04',
    client: 'Matheus Faggi',
    price: '160,00',
    createdAt: '10/01/2020',
    finishedAt: '10/02/2020',
  },
  {
    title: 'Titulo 05',
    client: 'Matheus Faggi',
    price: '160,00',
    createdAt: '10/01/2020',
    finishedAt: '10/02/2020',
  },
  {
    title: 'Titulo 06',
    client: 'Matheus Faggi',
    price: '160,00',
    createdAt: '10/01/2020',
    finishedAt: '10/02/2020',
  },
]

const CardOrder: React.FC<CardOrderTypes> = ({
  client,
  title,
  createdAt,
  finishedAt,
  price,
  onPress,
}: CardOrderTypes) => {
  return (
    <Card style={{ marginVertical: 8 }} onPress={onPress}>
      <Card.Content>
        <Headline>{title}</Headline>
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
    </ScrollView>
  )
}
export { ListOrderService }
