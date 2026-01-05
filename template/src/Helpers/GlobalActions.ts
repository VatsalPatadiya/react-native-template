import {navigationRef} from '@/Router/Rootnavigation'

export const GoBack = () => {
  if (navigationRef?.current) {
    if (navigationRef?.current.isReady()) {
      navigationRef.current.goBack()
    }
  }
}
