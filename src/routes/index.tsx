import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigatorScreenParams } from '@react-navigation/native'
import { SignIn, SignUp } from '../pages/Auth'

export type StackRoot = {
  Auth: NavigatorScreenParams<AuthStack>
  App: undefined
}
export type AuthStack = {
  SignIn: undefined
  SignUp: undefined
}

const RootStackNavigator = createStackNavigator<StackRoot>()
const AuthStackNavigator = createStackNavigator<AuthStack>()

const AuthRoute: React.FC = () => {
  return (
    <AuthStackNavigator.Navigator initialRouteName="SignIn" headerMode="none">
      <AuthStackNavigator.Screen name="SignIn" component={SignIn} />
      <AuthStackNavigator.Screen name="SignUp" component={SignUp} />
    </AuthStackNavigator.Navigator>
  )
}
const RootRoute: React.FC = () => {
  return (
    <RootStackNavigator.Navigator initialRouteName="Auth" headerMode={'none'}>
      <RootStackNavigator.Screen name="Auth" component={AuthRoute} />
    </RootStackNavigator.Navigator>
  )
}

export { RootRoute, AuthRoute }
