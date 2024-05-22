interface AccordionItem {
  title: string
  text: string
  keyId: string
}

export interface AccordionItemProps {
  title: string
  children: React.ReactNode
  keyId?: string
  opened?: boolean
}

export interface AccordionProps {
  items: AccordionItem[]
}
