export interface LabelArray {
  text: string
  color?: string
}

export interface LabelProps {
  children: React.ReactNode
  color?: string
}

export interface LabelsProps {
  labels: LabelArray[]
}
