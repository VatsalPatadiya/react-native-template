import {useEffect, useState} from 'react'

import Constant from '@/Helpers/Constant'
import {Emitter} from '@/Helpers/Emitter'

export default () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const loaderState = Emitter.addListener(
      Constant.EMIT_EVENTS.isLoaderVisible,
      (isVisibleLoader: boolean) => {
        setIsVisible(isVisibleLoader)
      }
    )

    return () => {
      loaderState.remove()
    }
  }, [])

  return {
    isVisible
  }
}
