const pallete = {
  Teal100: '#e6f5f6',
  Teal200: '#d9f0f2',
  Teal300: '#b0e1e4',
  Teal400: '#009da8',
  Teal500: '#008d97',
  Teal600: '#007e86',
  Teal700: '#00767e',
  Teal800: '#005e65',
  Teal900: '#00474c',
  Teal1000: '#00373b',

  Purple100: '#eeedfc',
  Purple200: '#e6e4fa',
  Purple300: '#cbc7f5',
  Purple400: '#8f85ff',
  Purple500: '#564ae0',
  Purple600: '#4d43ca',
  Purple700: '#453bb3',
  Purple800: '#4138a8',
  Purple900: '#342c86',
  Purple1000: '#272165',
  Purple1100: '#1e1a4e',

  Blue100: '#e8f0fc',
  Blue200: '#dce8fb',
  Blue300: '#b7d0f6',
  Blue400: '#498cf1',
  Blue500: '#1668e3',
  Blue600: '#145ecc',
  Blue700: '#1253b6',
  Blue800: '#114eaa',
  Blue900: '#0d3e88',
  Blue1000: '#0a2f66',
  Blue1100: '#08244f',

  Orange100: '#fef6e6',
  Orange200: '#fde9c2',
  Orange300: '#fcd891',
  Orange400: '#fbc65e',
  Orange500: '#f9b42e',
  Orange600: '#f8a400',
  Orange700: '#d38b00',
  Orange800: '#b07400',
  Orange900: '#8d5d00',
  Orange1000: '#704a00',

  MidnightBlue100: '#ffffff',
  MidnightBlue200: '#fdfdfd',
  MidnightBlue300: '#f5f5f6',
  MidnightBlue400: '#f0f1f1',
  MidnightBlue500: '#dadbdd',
  MidnightBlue600: '#c2c3c7',
  MidnightBlue700: '#909399',
  MidnightBlue800: '#5f626c',
  MidnightBlue900: '#4b4f5a',
  MidnightBlue1000: '#2e323f',
  MidnightBlue1100: '#272b38',
  MidnightBlue1200: '#151b2b',
  MidnightBlue1300: '#090e1d',

  InfoGreen: '#01b574',
  InfoYellow: '#ffd900',
  InfoAmber: '#fa8500',
  InfoRed: '#f53838',

  OpacityLight300: '#a3adc851',
  OpacityLight200: '#a3adc828',
  OpacityLight100: '#a3adc814',

  OpacityDark100: '#090e1d14',
  OpacityDark200: '#090e1d28',
  OpacityDark300: '#090e1d51',
  OpacityDark400: '#090e1db7'
}

const tertiaryColors = [
  '#006450',
  '#158A06',
  '#2C46B9',
  '#8B1A32',
  '#0097FF',
  '#1C3B87',
  '#D84000',
  '#527AA1',
  '#77A3D1',
  '#8400E7',
  '#007BC0',
  '#DC148C',
  '#004B60',
  '#E8105B',
  '#26856B',
  '#777777',
  '#8D67AB',
  '#FF722F',
  '#503751',
  '#E61D32',
  '#B02797',
  '#91004C',
  '#0FB870',
  '#CB08E8',
  '#7D4B33',
  '#BA5D08',
  '#A56752'
]

export const colors = {
  text: {
    primary: '#ffffffff',
    secondary: pallete.MidnightBlue600,
    brand: pallete.Teal400,
    invertPrimary: pallete.MidnightBlue1300,
    tertiary: pallete.MidnightBlue800,
    disable: pallete.OpacityLight300,
    invertDisable: pallete.OpacityDark300,
    accent: pallete.Purple400
  },
  border: {
    secondary: pallete.OpacityLight300,
    invertPrimary: pallete.MidnightBlue1300,
    primary: pallete.MidnightBlue100,
    active: pallete.Purple400,
    disable: pallete.OpacityLight300,
    invertDisable: pallete.OpacityDark300,
    tertiary: pallete.OpacityLight100,
    brand: pallete.Teal400
  },
  button: {
    contained: pallete.Teal700,
    containedHover: pallete.Teal800,
    containedOnClick: pallete.Teal900,
    allDisable: pallete.OpacityLight100,
    outlinedAllHover: pallete.OpacityLight100,
    outlinedAllOnClick: pallete.OpacityLight200,
    invertOutlinedAllHover: pallete.OpacityDark100,
    invertOutlinedAllOnClick: pallete.OpacityDark200,
    outlinedAllActive: pallete.Blue500,
    iconHover: pallete.OpacityLight100,
    iconOnClick: pallete.OpacityLight200,
    invertContained: pallete.OpacityLight100,
    invertContainedHover: pallete.OpacityLight200,
    invertContainedOnClick: pallete.OpacityLight300
  },
  surface: {
    primary: pallete.MidnightBlue1300,
    opacity: pallete.OpacityLight100,
    accent: pallete.Blue500,
    brand: pallete.Teal700,
    disable: pallete.OpacityLight100,
    hover: pallete.OpacityLight100,
    onClick: pallete.OpacityLight200,
    overlay: pallete.OpacityDark400,
    secondary: pallete.MidnightBlue1200,
    invertPrimary: pallete.MidnightBlue100
  },
  info: {
    exactMatch: pallete.InfoGreen,
    closeMatch: pallete.InfoYellow,
    broadMatch: pallete.InfoAmber,
    notification: pallete.Orange600
  },
  textfield: {
    primary: pallete.OpacityLight100,
    primaryHover: pallete.OpacityLight200,
    primaryActive: pallete.OpacityLight100
  },
  link: {
    secondary: pallete.Purple400,
    secondaryHover: pallete.Purple500,
    secondaryOnClick: pallete.Purple600,
    primary: pallete.MidnightBlue100,
    primaryHover: pallete.MidnightBlue600,
    primaryOnClick: pallete.MidnightBlue800
  },
  checkbox: {
    primary: pallete.OpacityLight100,
    primaryHover: pallete.OpacityLight200,
    primaryActive: pallete.Teal700
  },
  icon: {
    primary: pallete.MidnightBlue100,
    secondary: pallete.MidnightBlue600,
    tertiary: pallete.MidnightBlue800,
    invertPrimary: pallete.MidnightBlue1300,
    brand: pallete.Teal400,
    disable: pallete.OpacityLight300,
    invertDisable: pallete.OpacityDark300
  },
  select: {
    primary: pallete.OpacityLight100,
    primaryHover: pallete.OpacityLight200,
    primaryActive: pallete.OpacityLight300
  },
  tag: {
    contained: pallete.OpacityLight100,
    containedHover: pallete.OpacityLight200,
    containedOnClick: pallete.OpacityLight300
  },
  error: {
    primary: pallete.InfoRed
  },
  accent: {
    light: pallete.Teal300,
    normal: pallete.Teal400,
    dark: pallete.Teal700,
    darker: pallete.Teal1000
  },
  shadows: {
    dark: 'rgba(0, 0, 0, 0.25)'
  },
  gradients: {
    blue: {
      start: pallete.Blue500,
      end: pallete.Purple500
    }
  },
  tertiaryColors
} as const

export type SchemeColors = typeof colors
export type ColorKeyPath =
  | ['text', keyof SchemeColors['text']]
  | ['surface', keyof SchemeColors['surface']]
  | ['icon', keyof SchemeColors['icon']]
  | ['error', keyof SchemeColors['error']]
  | ['button', keyof SchemeColors['button']]
  | ['border', keyof SchemeColors['border']]
