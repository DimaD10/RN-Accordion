import React from 'react'
import Text from '../Text'
import { AntDesign } from '@expo/vector-icons'
import { styles } from './styles'
import { AccordionItemProps } from './accordion.config'
import { Accordion } from '@tamagui/accordion'
import { View } from '@tamagui/web'

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  keyId = 'accordionElement'
}) => {

  return (
    <Accordion.Item value={keyId} style={styles.accordionItem}>
      <Accordion.Trigger
        flexDirection='row'
        justifyContent='space-between'
        style={styles.header}
        ref={node => {
            
          if (node) {
            node.style.setProperty('background-color', 'transparent', 'important')
          }
        }}
      >
        {({ open }: { open: boolean }) => (
          <>
            <Text>{title}</Text>

            <View style={styles.icon} rotate={open ? '180deg' : '0deg'}>
              <AntDesign animation='quick' name='down' size={14} color='white' />
            </View>
          </>
        )}
      </Accordion.Trigger>
      <Accordion.HeightAnimator animation='bouncy' style={styles.body}>
        <Accordion.Content animation='bouncy' exitStyle={{ opacity: 0 }} style={styles.bodyWrapper}>
          {children}
        </Accordion.Content>
      </Accordion.HeightAnimator>
    </Accordion.Item>
  )
}

export default AccordionItem
