export const ACTION_TYPE = {
  OPEN: 'OPEN',
  CLOSE: 'CLOSE'
}

const initState = false;

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