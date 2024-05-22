import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  accordionItem: {
    flex: 1,
    margin: 16,
    backgroundColor: 'rgba(163, 173, 200, 0.08)',
    borderRadius: 16
  },
  header: {
    color: '#ffffff',
    paddingLeft: 12,
    paddingRight: 38,
    paddingTop: 16,
    paddingBottom: 16,
    position: 'relative',
    backgroundColor: 'transparent',
    borderWidth: 0
  },
  icon: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: [
      {
        rotate: '0deg'
      },
      {
        translateY: '-50%'
      },
      {
        scaleY: 0.8
      }
    ]
  },
  body: {
    fontSize: 12,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  bodyWrapper: {
    padding: 12,
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }
})
