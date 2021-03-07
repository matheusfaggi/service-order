/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useContext } from 'react'
import { Icon } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigatorScreenParams, RouteProp } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SignIn, SignUp } from '../pages/Auth'
import { CreateOrderService, ListOrderService, Profile } from '../pages/App'
import { AuthContext } from '../contexts/index'

export type RootStack = {
  Auth: NavigatorScreenParams<AuthStack>
  App: NavigatorScreenParams<AppTab>
}
export type AuthStack = {
  SignIn: undefined
  SignUp: undefined
}
export type AppTab = {
  CreateOrderService: undefined
  ListOrderService: undefined
  Profile: undefined
}
export type Router = RouteProp<RootStack, 'App'>

const RootStackNavigator = createStackNavigator<RootStack>()
const AuthStackNavigator = createStackNavigator<AuthStack>()
const AppTabNavigator = createBottomTabNavigator<AppTab>()

const AuthRoute: React.FC = () => {
  return (
    <AuthStackNavigator.Navigator initialRouteName="SignIn" headerMode="none">
      <AuthStackNavigator.Screen name="SignIn" component={SignIn} />
      <AuthStackNavigator.Screen name="SignUp" component={SignUp} />
    </AuthStackNavigator.Navigator>
  )
}

const AppRoute: React.FC = () => {
  return (
    <AppTabNavigator.Navigator>
      <AppTabNavigator.Screen
        name="ListOrderService"
        component={ListOrderService}
        options={{
          title: 'Ordens de serviço',
          tabBarIcon: ({ size }) => (
            <Icon name="list" size={size} type="font-awesome-5" />
          ),
        }}
      />
      <AppTabNavigator.Screen
        name="CreateOrderService"
        component={CreateOrderService}
        options={{
          title: 'Nova ordem',
          tabBarIcon: ({ size }) => (
            <Icon name="plus" size={size} type="font-awesome-5" />
          ),
        }}
      />
      <AppTabNavigator.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ size }) => (
            <Icon name="user" size={size} type="font-awesome-5" />
          ),
        }}
      />
    </AppTabNavigator.Navigator>
  )
}

const RootRoute: React.FC = () => {
  const { userToken } = useContext(AuthContext)
  return (
    <RootStackNavigator.Navigator initialRouteName="Auth" headerMode={'none'}>
      {userToken !== '' ? (
        <RootStackNavigator.Screen name="App" component={AppRoute} />
      ) : (
        <RootStackNavigator.Screen name="Auth" component={AuthRoute} />
      )}
    </RootStackNavigator.Navigator>
  )
}

export { RootRoute, AuthRoute, AppRoute }
