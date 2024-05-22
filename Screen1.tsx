import { StatusBar } from 'expo-status-bar'
import { ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { colors } from './ds/colors'
import { Text } from './ds/components/Text'
import AccordionSingle from './ds/components/Accordion/AccordionSingle'
import LabelsComponent from './ds/components/Labels/Labels'
import { LabelArray } from './ds/components/Labels/labels.config'

const TAGS: LabelArray[] = [
  { text: 'Is a classic cocktail' },
  { text: 'Looks layered' },
  { text: 'Dry' }
]

export const Screen1: React.FC<{}> = () => {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.surface.primary
      }}
    >
      <StatusBar style='light' />
      <ScrollView
        style={{
          flex: 1
        }}
        alwaysBounceVertical={false}
        contentContainerStyle={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom
        }}
      >
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 12
          }}
        >
          <Text typeface='H4'>Hello, User</Text>
        </View>

        <AccordionSingle title='Cocktail profile' opened={true}>
          <LabelsComponent labels={TAGS} />
        </AccordionSingle>
        <AccordionSingle title='Cocktail profile'>
          <Text typeface='P3' style={{ color: '#c2c3c7' }}>
            A martini is a simple marriage of gin and dry vermouth (which has never enjoyed the same
            acclaim as its cousin, sweet vermouth). This martini variation tempers the intensity of
            dry vermouth with a little help from Italy in the form of Aperol. The drink’s appealing
            balance offers a first step toward enjoying the classic medley of vermouth, gin, and a
            bitter (does that formula sound familiar?).
          </Text>

          <LabelsComponent labels={TAGS} />
        </AccordionSingle>
      </ScrollView>
    </View>
  )
}
