import {CommonActions, createNavigationContainerRef} from '@react-navigation/native'

export const navigationRef = createNavigationContainerRef<any>()

export const resetStack = (routes: any[], index: number = 0) => {
  if (navigationRef.isReady()) {
    navigationRef?.current?.dispatch(
      CommonActions.reset({
        index,
        routes
      })
    )
  }
}

export function navigate(name: any, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params)
  }
}
