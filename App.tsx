import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Screen1 } from './Screen1'

export default function App() {
  return (
    <SafeAreaProvider>
      <Screen1 />
    </SafeAreaProvider>
  )
}
