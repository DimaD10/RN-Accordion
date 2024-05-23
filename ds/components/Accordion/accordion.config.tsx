interface AccordionItem {
  title: string
  text: string
}

export interface AccordionItemProps {
  title: string
  children: React.ReactNode
  opened?: boolean
}

export interface AccordionProps {
  items: AccordionItem[]
}
