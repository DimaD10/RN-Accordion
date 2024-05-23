import React from 'react'
import { AccordionItemProps } from './accordion.config'
import AccordionItem from './AccordionItem'
import { View } from 'react-native'

const AccordionSingle: React.FC<AccordionItemProps> = ({
  title,
  children,
  opened
}) => {

  return (
    <View>
      <AccordionItem title={title} opened={opened}>
        {children}
      </AccordionItem>
    </View>
  )
}

export default AccordionSingle
