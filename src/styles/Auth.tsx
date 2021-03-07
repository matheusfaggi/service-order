import {
  View,
  Text,
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
  TextInputProps,
} from 'react-native'
import { TextInput } from 'react-native-paper'

import styled from 'styled-components'

export const AuthContainer = styled(KeyboardAvoidingView).attrs(
  (): KeyboardAvoidingViewProps => ({
    behavior: Platform.OS === 'ios' ? 'padding' : 'height',
  }),
)`
  flex: 1;
  display: flex;
  justify-content: center;
`
export const AuthForm = styled(View)`
  padding: 32px 16px;

  display: flex;
  justify-content: center;
  border-radius: 15px;
`
export const Title = styled(Text)`
  padding-bottom: 32px;
  font-size: 42px;
`
export const Input = styled(TextInput)`
  margin-bottom: 8;
`
