import {KeyboardAvoidingView, Platform, type StyleProp, View, type ViewStyle} from 'react-native'
import Modal from 'react-native-modal'
import {RootSiblingParent} from 'react-native-root-siblings'

import useColor from '@/Hooks/useColor'

import myStyles from './AppModal.style'

type AppModalProps = {
  isVisible: boolean
  onClose: () => void
  children?: any
  animationIn?: ModalAnimationIn
  animationOut?: ModalAnimationIn
  innerStyle?: StyleProp<ViewStyle>
  onModalHide?: () => void
  isNotchVisible?: boolean
  modalRootContainer?: StyleProp<ViewStyle>
  backdropColor?: string
  isModalCloseOnBackDrop?: boolean
  behavior?: any
  onModalDismiss?: () => void
}

export default ({
  isVisible,
  onClose,
  children,
  innerStyle = {},
  animationIn = 'slideInUp',
  animationOut = 'slideOutDown',
  onModalHide,
  isNotchVisible = false,
  modalRootContainer,
  backdropColor,
  isModalCloseOnBackDrop = true,
  behavior = 'padding',
  onModalDismiss
}: AppModalProps) => {
  const colors = useColor()
  const styles = myStyles(colors)

  const isIOS = Platform.OS === 'ios'

  return (
    <Modal
      isVisible={isVisible}
      style={[styles.modelContainer, modalRootContainer]}
      onBackdropPress={isModalCloseOnBackDrop ? onClose : () => {}}
      animationIn={animationIn}
      animationOut={animationOut}
      onModalHide={onModalHide}
      backdropColor={backdropColor ?? colors.modalOverlay}
      onBackButtonPress={isModalCloseOnBackDrop ? onClose : () => {}}
      onDismiss={onModalDismiss}
    >
      <KeyboardAvoidingView behavior={isIOS ? behavior : ''}>
        <RootSiblingParent>
          {isNotchVisible && <View style={styles.notchStyle} />}
          <View style={[styles.innerContainer, innerStyle]}>{children}</View>
        </RootSiblingParent>
      </KeyboardAvoidingView>
    </Modal>
  )
}
