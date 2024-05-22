import React, { useState } from 'react'
import { AccordionItemProps } from './accordion.config'
import { Accordion } from '@tamagui/accordion'
import AccordionItem from './AccordionItem'

const AccordionSingle: React.FC<AccordionItemProps> = ({
  title,
  children,
  keyId = 'accordionElement',
  opened
}) => {
    const [expanded, setExpanded] = useState<boolean>(opened ? opened : false)

    const handleChange = (e: string[]) => {
        console.log(e);
        setExpanded(e.length > 0)
    }

  return (
    <Accordion type='multiple' onValueChange={(e) => handleChange(e)} defaultValue={opened ? [keyId] : []}>
      <AccordionItem title={title} keyId={keyId}>
        {children}
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionSingle
