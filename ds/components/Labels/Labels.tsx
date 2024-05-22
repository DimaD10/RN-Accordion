import React from 'react'
import { styles } from './styles'
import { LabelProps, LabelsProps } from './labels.config'

import { View } from 'react-native'
import Text from '../Text'

const LabelsComponent: React.FC<LabelsProps> = ({ labels }) => {
  return (
    <View style={styles.container}>
      {[...labels].length &&
        [...labels].map(el => (
          <LabelComponent color={el.color} key={el.text.split(' ').join('_').toLowerCase()}>
            {el.text}
          </LabelComponent>
        ))}
    </View>
  )
}

const LabelComponent: React.FC<LabelProps> = ({ children, color = "#1668e3" }) => {
    return (
        <View 
            style={[styles.label, {
                backgroundColor: color
            }]}
        >
            <Text typeface='P3-Medium'>
                { children }
            </Text>
        </View>
    )
}

export default LabelsComponent
