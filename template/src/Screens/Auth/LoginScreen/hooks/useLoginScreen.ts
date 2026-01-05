import Screens from '@/Helpers/Screens'
import {resetStack} from '@/Router/Rootnavigation'

export default () => {
  const onSubmit = () => {
    resetStack([{name: Screens.MainStack}])
  }

  return {
    onSubmit
  }
}
