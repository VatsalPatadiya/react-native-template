import React from 'react'
import {ActivityIndicator, View} from 'react-native'

import useColor from '@/Hooks/useColor'

import myStyles from './AppLoader.style'
import useAppLoader from './hooks/useAppLoader'

export default () => {
  const colors = useColor()
  const styles = myStyles(colors)

  const {isVisible} = useAppLoader()
  if (isVisible) {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <ActivityIndicator color={colors.black} size={'large'} />
        </View>
      </View>
    )
  }
}
