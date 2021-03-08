import React, { useContext } from 'react'
import { View, Image } from 'react-native'
import { Button, Headline } from 'react-native-paper'
import { AuthContext } from '../../contexts'
import ProfilePic from '../../assets/profile.jpeg'

const Profile: React.FC = () => {
  const { SignOut } = useContext(AuthContext)
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 32,
        alignItems: 'center',
      }}>
      <Image
        source={ProfilePic}
        style={{ width: 100, height: 100, borderRadius: 100 }}
      />
      <Headline>Nome do usuário</Headline>
      <Button onPress={() => SignOut()} mode="contained">
        Sair
      </Button>
    </View>
  )
}
export { Profile }
