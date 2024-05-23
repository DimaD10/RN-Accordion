import React, { useEffect, useRef, useState } from 'react'
import Text from '../Text'
import { AntDesign } from '@expo/vector-icons'
import { styles } from './styles'
import { AccordionItemProps } from './accordion.config'
import { Animated, Easing, LayoutChangeEvent, TouchableOpacity } from 'react-native'

const ANIMATION_DURATION_MS = 220

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, opened = false }) => {
  const [expanded, setExpanded] = useState<boolean>(opened)
  const [bodyHeight, setBodyHeight] = useState<string>('0px')
  const [initHeight, setInitHeight] = useState<string>('9999px')

  const rotateAnimation = useRef(new Animated.Value(1)).current
  const heightAnimation = useRef(new Animated.Value(0)).current
  const opacityAnimation = useRef(new Animated.Value(0)).current

  const handleExpand = () => {
    setExpanded(!expanded)
  }

  const changeHeightPoint = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout

    if (height > 0 && bodyHeight === '0px') {
      setBodyHeight(`${height}px`)
    }

    setInitHeight('0px')
  }

  useEffect(() => {
    Animated.timing(rotateAnimation, {
      toValue: expanded ? 0 : 1,
      duration: ANIMATION_DURATION_MS,
      easing: Easing.quad,
      useNativeDriver: false
    }).start()

    Animated.timing(heightAnimation, {
      toValue: expanded ? 1 : 0,
      duration: ANIMATION_DURATION_MS,
      easing: Easing.ease,
      useNativeDriver: false
    }).start()

    Animated.timing(opacityAnimation, {
      toValue: expanded ? 1 : 0,
      duration: ANIMATION_DURATION_MS,
      easing: Easing.ease,
      useNativeDriver: false
    }).start()
  }, [expanded])

  const rotateInterpolate = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-180deg'],
    extrapolate: 'clamp'
  })

  const heightInterpolate = heightAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [initHeight, bodyHeight],
    extrapolate: 'clamp'
  })

  const opacityInterpolate = opacityAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  })

  return (
    <Animated.View style={styles.accordionItem}>
      <TouchableOpacity style={styles.header} onPress={() => handleExpand()}>
        <Text typeface='H4'>{title}</Text>

        <Animated.View
          style={[
            styles.icon,
            {
              transform: [
                {
                  rotate: rotateInterpolate
                },
                {
                  scaleY: 0.8
                }
              ]
            }
          ]}
        >
          <AntDesign name='up' size={14} color='white' />
        </Animated.View>
      </TouchableOpacity>
      <Animated.View
        style={[styles.body, { maxHeight: heightInterpolate }]}
        onLayout={changeHeightPoint}
      >
        <Animated.View
          style={[
            styles.bodyWrapper,
            {
              opacity: opacityInterpolate
            }
          ]}
        >
          {children}
        </Animated.View>
      </Animated.View>
    </Animated.View>
  )
}

export default AccordionItem
