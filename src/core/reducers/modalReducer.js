export const ACTION_TYPE = {
  OPEN: 'OPEN',
  CLOSE: 'CLOSE'
}

const initState = {
  isShow: false,
  message: '',
  modalType: 'Danger',
  closeModalEvt: null
}


/**
 * 管理元件 Modal 彈窗內容與是否要出現
 *
 * @param {*} [state=initState]
 * @param {*} action
 * @return {*} 
 */
const modalReducer = (state = initState, action) => {
  switch(action.type) {
    case ACTION_TYPE.OPEN:
      return {
        isShow: true,
        message: action.message,
        modalType: action.modalType,
        closeModalEvt: action.closeModalEvt
      }
    case ACTION_TYPE.CLOSE:
      return {
        ...state,
        isShow: false
      }
    default:
      return state
  }
}

export {modalReducer}