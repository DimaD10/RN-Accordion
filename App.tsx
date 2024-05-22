import { SafeAreaProvider } from 'react-native-safe-area-context'
import '@tamagui/core/reset.css'
import { TamaguiProvider, createTamagui } from '@tamagui/core'
import { config } from '@tamagui/config/v3'

import { Screen1 } from './Screen1'

const tamaguiConfig = createTamagui(config)

type Conf = typeof tamaguiConfig
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

export default function App() {
  return (
    <SafeAreaProvider>
      <TamaguiProvider config={tamaguiConfig}>
        <Screen1 />
      </TamaguiProvider>
    </SafeAreaProvider>
  )
}
