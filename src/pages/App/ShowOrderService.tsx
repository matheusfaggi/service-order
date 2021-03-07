import React from 'react'
import { View, ScrollView } from 'react-native'
import { Paragraph, Subheading, Card, Title, Chip } from 'react-native-paper'

const ShowOrderService: React.FC = () => {
  return (
    <ScrollView style={{ marginHorizontal: 16, marginVertical: 32 }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Title style={{ marginBottom: 16 }}>Titulo ordem de serviço</Title>
        <View>
          <Chip>Aberta</Chip>
        </View>
      </View>
      <Card>
        <Card.Content>
          <Subheading>Matheus Faggi</Subheading>
          <Subheading>Preço: R$ 160,00</Subheading>
          <Paragraph>Abertura: 10/10/2020 - Finalização: 10/12/2020</Paragraph>
          <Paragraph>
            Sit anim elit et in qui mollit mollit sint pariatur exercitation
            esse laborum ea. Do nisi sit fugiat pariatur ex proident est aliqua
            tempor pariatur occaecat qui ullamco pariatur. Nostrud cillum tempor
            ea Lorem tempor anim sit elit velit eu sint fugiat Lorem.
          </Paragraph>
        </Card.Content>
      </Card>
      <Title style={{ marginBottom: 16, marginTop: 16 }}>Comentários</Title>
      <Card style={{ marginVertical: 8 }}>
        <Card.Content>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 8,
            }}>
            <Subheading>Marcos Vinícius</Subheading>
            <Subheading>10/10/2020</Subheading>
          </View>
          <Paragraph>
            Sit anim elit et in qui mollit mollit sint pariatur exercitation
            esse laborum ea. Do nisi sit fugiat pariatur ex proident est aliqua
            tempor pariatur occaecat qui ullamco pariatur. Nostrud cillum tempor
            ea Lorem tempor anim sit elit velit eu sint fugiat Lorem.
          </Paragraph>
        </Card.Content>
      </Card>
      <Card style={{ marginVertical: 8 }}>
        <Card.Content>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 8,
            }}>
            <Subheading>Thayna Mendonça</Subheading>
            <Subheading>10/10/2020</Subheading>
          </View>
          <Paragraph>
            Sit anim elit et in qui mollit mollit sint pariatur exercitation
            esse laborum ea. Do nisi sit fugiat pariatur ex proident est aliqua
            tempor pariatur occaecat qui ullamco pariatur. Nostrud cillum tempor
            ea Lorem tempor anim sit elit velit eu sint fugiat Lorem.
          </Paragraph>
        </Card.Content>
      </Card>
      <Card style={{ marginVertical: 8 }}>
        <Card.Content>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 8,
            }}>
            <Subheading>Juan Carlos Rodrigues Latorre</Subheading>
            <Subheading>10/10/2020</Subheading>
          </View>
          <Paragraph>
            Sit anim elit et in qui mollit mollit sint pariatur exercitation
            esse laborum ea. Do nisi sit fugiat pariatur ex proident est aliqua
            tempor pariatur occaecat qui ullamco pariatur. Nostrud cillum tempor
            ea Lorem tempor anim sit elit velit eu sint fugiat Lorem.
          </Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  )
}
export { ShowOrderService }
