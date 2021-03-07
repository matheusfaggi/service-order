import React, { useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { RootRoute } from './routes'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AuthContext } from './contexts/index'
const App: React.FC = () => {
  const [userToken, setUserToken] = useState('')
  const SignIn = () => {
    setUserToken('teste')
  }
  const SignOut = () => {
    setUserToken('')
  }
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <AuthContext.Provider value={{ userToken, SignIn, SignOut }}>
          <RootRoute />
        </AuthContext.Provider>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}
export default App
