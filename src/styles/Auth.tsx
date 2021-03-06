import { View, Dimensions, Text, SafeAreaView } from 'react-native'
import styled from 'styled-components'
const { height } = Dimensions.get('window')

export const AuthContainer = styled(SafeAreaView)`
  display: flex;
  padding: 16px 32px;
  align-items: center;
  justify-content: center;

  position: absolute;
  width: 100%;
  bottom: 0;
  background-color: white;
  height: ${height};
`
export const AuthForm = styled(View)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 32px 16px;

  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  position: absolute;
`
export const Title = styled(Text)`
  padding-bottom: 32px;
  font-size: 42px;
`
