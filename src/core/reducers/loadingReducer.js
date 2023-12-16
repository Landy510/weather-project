export const ACTION_TYPE = {
  OPEN: 'OPEN',
  CLOSE: 'CLOSE'
}

const initState = false;


/**
 * 管理元件 GlobalLoading 是否要出現
 *
 * @param {*} [state=initState]
 * @param {*} action
 * @return {*} 
 */
const loadingReducer = (state = initState, action) => {
  switch(action.type) {
    case ACTION_TYPE.OPEN:
      return true
    case ACTION_TYPE.CLOSE:
      return false
    default:
      return state
  }
}

export {loadingReducer}