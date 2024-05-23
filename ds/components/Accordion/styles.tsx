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
    paddingRight: 12,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: 'transparent',
    borderWidth: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 6
  },
  icon: {
    transform: [
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
