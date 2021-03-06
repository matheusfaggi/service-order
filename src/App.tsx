import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { RootRoute } from './routes'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <RootRoute />
      </SafeAreaProvider>
    </NavigationContainer>
  )
}
export default App
