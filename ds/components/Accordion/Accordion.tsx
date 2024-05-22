import React from 'react'
import { styles } from './styles'
import { AccordionProps } from './accordion.config'
import AccordionItem from './AccordionItem'
import { View } from 'react-native'



const AccordionComponent: React.FC<AccordionProps> = ({ items }) => {
  return (
    <View style={styles.container}>
      {[...items].length &&
        [...items].map((el, i) => (
          <AccordionItem title={el.title} key={i} keyId={`${i}`}>
            { el.text }
          </AccordionItem>
        ))}
    </View>
  )
}

export default AccordionComponent
